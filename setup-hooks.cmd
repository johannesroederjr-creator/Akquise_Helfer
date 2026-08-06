@echo off
title Akquise-Helfer - Git Hooks einrichten
if not exist "%~dp0.git\hooks" (
    echo Fehler: .git\hooks nicht gefunden. Bist du im Projektroot?
    pause
    exit /b 1
)
copy /Y "%~dp0.githooks\pre-commit" "%~dp0.git\hooks\pre-commit" >nul
echo Git Hook installiert: docs wird vor jedem Commit automatisch aktualisiert.
echo Einmalig noetig - danach nichts mehr manuell tun.
pause
