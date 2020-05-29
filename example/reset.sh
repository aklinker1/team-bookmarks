#!/bin/bash
cd ..
yarn
yarn build
yarn build:zip-vue

cd example
rm -rf node_modules
yarn
