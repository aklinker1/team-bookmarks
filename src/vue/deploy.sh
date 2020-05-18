#!/bin/bash
set -e

function title() {
  echo -e "\n\x1b[1m\x1b[94m$1\x1b[0m"
}
function step() {
  echo -en "\x1b[2m - \x1b[0m$1\x1b[2m...\x1b[0m"
}
function stepEnd() {
  echo -e "\b\b\b  \x1b[92m\x1b[1m✔   \x1b[0m"
}
function code() {
    echo -n "\x1b[0m\x1b[96m\x1b[1m$1\x1b[0m"
}
function onFailure() {
    echo -e "\b\b\b\x1b[91m\x1b[1m ✘  \n\nStep failed\x1b[0m\n"
}
trap 'onFailure' ERR

title "Deploying to GitHub pages"

step "Ensure you are on master"
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "master" ]]; then
  onFailure
  exit 1
fi
stepEnd

step "Check for package.json version update"
git diff origin/master -- package.json | grep version &> /dev/null
stepEnd

step "Check prettier formatting"
yarn prettier --check . &> /dev/null
stepEnd

step "Cleaning project"
rm -rf 'dist/*'
rm -rf 'docs/*'
stepEnd

step "Build $(code 'docs/*')"
yarn build --dest docs &> /dev/null
stepEnd

step "Commit changes to $(code 'docs/*')"
git add docs/* package.json &> /dev/null
git commit -m "Deployed new version" &> /dev/null
stepEnd

step "Push to $(code 'origin/master')"
git push -f origin master &> /dev/null
stepEnd

echo -e "\n\x1b[92m\x1b[1m✔ Deployed\x1b[0m"
echo ""
