@echo off
cd /d "%~dp0"
echo Running: npx quartz sync
call npx quartz sync
echo.
echo Done. Window will stay open - close it manually when you're finished.
cmd /k
