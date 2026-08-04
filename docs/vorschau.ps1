<#
    Lokaler Vorschau-Server fuer die Akquise-Helfer-Website.

    Hintergrund: Auf diesem Rechner sind weder Node.js noch Python installiert.
    Dieser Server nutzt daher nur .NET-Bordmittel (TcpListener) und braucht
    weder eine Installation noch Administratorrechte.

    Start:  Doppelklick auf "Vorschau-starten.cmd"
    Stopp:  Strg + C im Fenster

    Hinweis: Diese Datei bewusst ohne Umlaute/Sonderzeichen halten - PowerShell 5.1
    liest .ps1-Dateien ohne BOM als ANSI, wodurch UTF-8-Sonderzeichen den Parser
    zerschiessen koennen.
#>

param(
    [int]$Port = 8080,
    [switch]$NoBrowser
)

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot

$mime = @{
    '.html'  = 'text/html; charset=utf-8'
    '.css'   = 'text/css; charset=utf-8'
    '.js'    = 'application/javascript; charset=utf-8'
    '.json'  = 'application/json; charset=utf-8'
    '.xml'   = 'application/xml; charset=utf-8'
    '.txt'   = 'text/plain; charset=utf-8'
    '.svg'   = 'image/svg+xml'
    '.png'   = 'image/png'
    '.jpg'   = 'image/jpeg'
    '.jpeg'  = 'image/jpeg'
    '.webp'  = 'image/webp'
    '.gif'   = 'image/gif'
    '.ico'   = 'image/x-icon'
    '.woff2' = 'font/woff2'
    '.pdf'   = 'application/pdf'
}

function Resolve-RequestPath([string]$urlPath) {
    $clean = $urlPath.Split('?')[0].Split('#')[0]
    try { $clean = [System.Uri]::UnescapeDataString($clean) } catch { }
    $clean = $clean.TrimStart('/')
    $clean = $clean.Replace('/', [System.IO.Path]::DirectorySeparatorChar)

    # Verzeichnis-Traversal verhindern
    if ($clean -match '\.\.') { return $null }

    $candidate = if ([string]::IsNullOrWhiteSpace($clean)) { $root } else { Join-Path $root $clean }

    if (Test-Path -LiteralPath $candidate -PathType Container) {
        $index = Join-Path $candidate 'index.html'
        if (Test-Path -LiteralPath $index -PathType Leaf) { return $index }
        return $null
    }
    if (Test-Path -LiteralPath $candidate -PathType Leaf) { return $candidate }

    # /seite  ->  /seite.html
    $withHtml = "$candidate.html"
    if (Test-Path -LiteralPath $withHtml -PathType Leaf) { return $withHtml }

    return $null
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
try {
    $listener.Start()
} catch {
    Write-Host "Port $Port ist belegt. Bitte mit anderem Port starten, z.B.:  .\vorschau.ps1 -Port 8090" -ForegroundColor Red
    exit 1
}

$url = "http://localhost:$Port/"
Write-Host ""
Write-Host "  Akquise-Helfer - lokale Vorschau laeuft" -ForegroundColor Green
Write-Host "  $url" -ForegroundColor Cyan
Write-Host "  Beenden mit Strg + C"
Write-Host ""

if (-not $NoBrowser) { Start-Process $url | Out-Null }

try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        try {
            $stream = $client.GetStream()
            $stream.ReadTimeout = 5000

            # Kompletten Request-Header lesen (bis Leerzeile), damit der
            # Empfangspuffer leer ist und Windows die Verbindung sauber schliesst
            $sb = [System.Text.StringBuilder]::new()
            $state = 0
            while ($state -lt 4) {
                $b = $stream.ReadByte()
                if ($b -lt 0) { break }
                [void]$sb.Append([char]$b)
                if (($state -eq 0 -or $state -eq 2) -and $b -eq 13) { $state++ }
                elseif (($state -eq 1 -or $state -eq 3) -and $b -eq 10) { $state++ }
                elseif ($b -eq 13) { $state = 1 }
                else { $state = 0 }
            }
            $requestLine = $sb.ToString().Split("`n")[0].Trim()
            if ([string]::IsNullOrWhiteSpace($requestLine)) { $client.Close(); continue }

            $parts = $requestLine.Split(' ')
            $method = $parts[0]
            $target = if ($parts.Length -gt 1) { $parts[1] } else { '/' }

            $file = Resolve-RequestPath $target
            $status = '200 OK'
            $type = 'text/html; charset=utf-8'
            $bytes = $null

            if ($method -ne 'GET' -and $method -ne 'HEAD') {
                $status = '405 Method Not Allowed'
                $bytes = [System.Text.Encoding]::UTF8.GetBytes('<h1>405</h1>')
            } elseif ($null -eq $file) {
                $status = '404 Not Found'
                $notFound = Join-Path $root '404.html'
                if (Test-Path -LiteralPath $notFound -PathType Leaf) {
                    $bytes = [System.IO.File]::ReadAllBytes($notFound)
                } else {
                    $bytes = [System.Text.Encoding]::UTF8.GetBytes('<h1>404</h1>')
                }
            } else {
                $ext = [System.IO.Path]::GetExtension($file).ToLowerInvariant()
                if ($mime.ContainsKey($ext)) { $type = $mime[$ext] } else { $type = 'application/octet-stream' }
                $bytes = [System.IO.File]::ReadAllBytes($file)
            }

            $header = "HTTP/1.1 $status`r`nContent-Type: $type`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
            $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            if ($method -ne 'HEAD') { $stream.Write($bytes, 0, $bytes.Length) }
            $stream.Flush()
            try { $client.Client.Shutdown([System.Net.Sockets.SocketShutdown]::Send) } catch { }

            $code = $status.Substring(0, 3)
            Write-Host "  $code  $target"
        } catch {
            # Einzelne fehlerhafte oder leere Verbindungen ignorieren.
            # Browser oeffnen Sockets auf Vorrat, die nie eine Anfrage senden.
        } finally {
            $client.Close()
        }
    }
} finally {
    $listener.Stop()
}
