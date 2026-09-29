@echo off
setlocal
cd /d "%~dp0\.."

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required. Install Node.js 18 or newer first.
  exit /b 1
)

if not exist node_modules (
  call npm install
)

if "%PORT%"=="" set PORT=4173
echo Starting Riverbend Civic Archive...
echo Open http://localhost:%PORT%
call npm start
