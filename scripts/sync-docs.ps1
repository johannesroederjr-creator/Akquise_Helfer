# Spiegelt akquise-helfer-website nach docs/ (GitHub Pages).
$Root = Split-Path -Parent $PSScriptRoot
$Source = Join-Path $Root "akquise-helfer-website"
$Dest = Join-Path $Root "docs"

if (-not (Test-Path $Source)) {
    Write-Error "Quellordner fehlt: $Source"
    exit 1
}

robocopy $Source $Dest /MIR /XD .git /NFL /NDL /NJH /NJS | Out-Null
# Robocopy: 0–7 = Erfolg, ab 8 = Fehler
if ($LASTEXITCODE -ge 8) {
    Write-Error "robocopy fehlgeschlagen (Exit-Code $LASTEXITCODE)"
    exit 1
}

exit 0
