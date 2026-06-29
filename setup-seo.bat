@echo off
REM SEO Configuration Setup Script for Windows
REM Replace placeholder domain with your actual domain

echo ========================================
echo Naveen Kumar S Portfolio - SEO Setup
echo ========================================
echo.

REM Get domain input
set /p DOMAIN="Enter your domain (e.g., example.com): "

if "%DOMAIN%"=="" (
  echo Error: Domain cannot be empty
  exit /b 1
)

set "OLD_DOMAIN=https://naveenkumars.com"
set "NEW_DOMAIN=https://%DOMAIN%"

echo Updating domain from: %OLD_DOMAIN%
echo                    to: %NEW_DOMAIN%
echo.

REM Function to replace in file
setlocal enabledelayedexpansion

for %%F in (
  "index.html"
  "src\utils\seo.js"
  "public\robots.txt"
  "public\.well-known\security.txt"
  "public\404.html"
) do (
  if exist %%F (
    powershell -Command "(Get-Content %%F) -replace '%OLD_DOMAIN%', '%NEW_DOMAIN%' | Set-Content %%F"
    echo Updated: %%F
  ) else (
    echo File not found: %%F
  )
)

echo.
echo SEO setup complete!
echo.
echo Next steps:
echo 1. Update your email in public\.well-known\security.txt
echo 2. Update GitHub URL in index.html (search for github.com/naveenkumars)
echo 3. Update LinkedIn URL in index.html (search for linkedin.com/in/naveenkumars)
echo 4. Run: npm run build
echo 5. Deploy the dist/ folder
echo 6. Submit sitemap to Google Search Console
echo.
pause
