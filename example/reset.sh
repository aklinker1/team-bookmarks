#!/bin/bash
cd ..
yarn
yarn build
yarn build:zip-vue
yarn version
yarn pack

cd example
rm -rf node_modules
read -p "Update version to match new version in ./package.json" PAUSE
yarn
