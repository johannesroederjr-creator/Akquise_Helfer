@echo off
title Akquise-Helfer - docs fuer GitHub Pages aktualisieren
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\sync-docs.ps1"
if errorlevel 1 (
    echo Sync fehlgeschlagen.
    pause
    exit /b 1
)
echo.
echo docs-Ordner ist jetzt identisch mit akquise-helfer-website.
echo Hinweis: Mit installiertem Git Hook passiert das automatisch vor jedem Commit.
pause
