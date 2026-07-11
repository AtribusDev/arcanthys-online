@echo off
cd /d "%~dp0"
echo Running: npx quartz sync
npx quartz sync
echo.
pause
