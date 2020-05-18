#!/bin/bash
yarn --cwd ../ build
rm -rf node_modules
yarn install
yarn team-bookmarks -v
