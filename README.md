# team-bookmarks

A easy to setup team bookmarks webpage!

![preview]()

## Install

Install as a dev dependency with your favorite package manager:

```bash
yarn add -D team-bookmarks
```

```bash
npm i -D team-bookmarks
```

## Setup

Create a file called `bookmarks.json`:

```json
{
  "$schema": "./node_modules/team_bookmarks/schema.json",
  "title": "",
  "repo": "",
  "bookmarks": [
    {
      "name": "",
      "color": "red",
      "children": [
        {
          "name": "",
          "url": "",
          "icon": ""
        }
      ]
    }
    {
      "name": "",
      "color": "green",
      "children": [
        {
          "name": "",
          "children": [
            {
              "name": "",
              "url": "",
              "icon": ""
            },
            {
              "name": "",
              "url": "",
              "icon": ""
            }
          ]
        }
      ]
    }
  ]
}
```

> The `$schema` adds editor support for the json file, but it can be excluded

Next, add some scripts to your `package.json`:

```json
"scripts": {
    "start": "team-bookmarks start",
    "check": "team-bookmarks check",
    "build": "team-bookmarks build",
    "deploy": "team-bookmarks deploy github:gh-pages"
}
```

You'll want to add the following to your `.gitignore`:

```ignore
/dist
```
