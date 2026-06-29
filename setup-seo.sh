#!/bin/bash
# SEO Configuration Setup Script
# Replace placeholder domain with your actual domain

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to replace text in files
replace_in_file() {
  local file=$1
  local old=$2
  local new=$3
  
  if [ -f "$file" ]; then
    sed -i "s|$old|$new|g" "$file"
    echo -e "${GREEN}✓${NC} Updated: $file"
  else
    echo -e "${RED}✗${NC} File not found: $file"
  fi
}

echo -e "${YELLOW}=== Naveen Kumar S Portfolio - SEO Setup ===${NC}"
echo ""
echo "This script will update all domain references for SEO."
echo ""

# Ask for domain
read -p "Enter your domain (e.g., example.com): " DOMAIN

if [ -z "$DOMAIN" ]; then
  echo -e "${RED}✗ Domain cannot be empty${NC}"
  exit 1
fi

DOMAIN_URL="https://$DOMAIN"
OLD_DOMAIN="https://naveenkumars.com"

echo -e "${YELLOW}Updating domain from:${NC} $OLD_DOMAIN"
echo -e "${YELLOW}                  to:${NC} $DOMAIN_URL"
echo ""

# Update files
replace_in_file "index.html" "$OLD_DOMAIN" "$DOMAIN_URL"
replace_in_file "src/utils/seo.js" "$OLD_DOMAIN" "$DOMAIN_URL"
replace_in_file "public/robots.txt" "$OLD_DOMAIN" "$DOMAIN_URL"
replace_in_file "public/.well-known/security.txt" "$OLD_DOMAIN" "$DOMAIN_URL"
replace_in_file "public/404.html" "$OLD_DOMAIN" "$DOMAIN_URL"

# Ask for GitHub username
echo ""
read -p "Enter your GitHub username: " GITHUB_USER
if [ ! -z "$GITHUB_USER" ]; then
  sed -i "s|https://github.com/naveenkumars|https://github.com/$GITHUB_USER|g" "index.html"
  echo -e "${GREEN}✓${NC} Updated GitHub URL in index.html"
fi

# Ask for LinkedIn profile
echo ""
read -p "Enter your LinkedIn username or profile ID: " LINKEDIN_USER
if [ ! -z "$LINKEDIN_USER" ]; then
  sed -i "s|https://linkedin.com/in/naveenkumars|https://linkedin.com/in/$LINKEDIN_USER|g" "index.html"
  echo -e "${GREEN}✓${NC} Updated LinkedIn URL in index.html"
fi

echo ""
echo -e "${GREEN}✓ SEO setup complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Update your email in public/.well-known/security.txt"
echo "2. Run: npm run build"
echo "3. Deploy the dist/ folder"
echo "4. Submit sitemap to Google Search Console"
echo ""
