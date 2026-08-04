@echo off
title Akquise-Helfer - docs fuer GitHub Pages aktualisieren
robocopy "%~dp0akquise-helfer-website" "%~dp0docs" /MIR /XD .git /NFL /NDL /NJH /NJS
echo.
echo docs-Ordner ist jetzt identisch mit akquise-helfer-website.
echo Als naechstes in Cursor: Commit und Push.
pause
