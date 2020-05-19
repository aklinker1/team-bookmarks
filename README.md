# team-bookmarks

A easy to setup team bookmarks webpage ready to deploy to github pages!

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

Create a file called `bookmarks.ts` or `bookmarks.js`, and export the config object:

```ts
// bookmarks.ts
import TeamBookmarks from 'team-bookmarks';

export default TeamBookmarks({
  bookmarks: [],
});
```

```js
// bookmarks.js
const TeamBookmarks = require('team-bookmarks');

module.exports = TeamBookmarks({
  title: '{Team Name} Bookmarks',
  bookmarks: [],
  iconMap: {},
});
```

Next, add some scripts to your `package.json`:

```json
"scripts": {
    "start": "team-bookmarks start",
    "watch": "team-bookmarks watch",
    "check": "team-bookmarks check",
    "build": "team-bookmarks build",
    "deploy": "team-bookmarks deploy github:gh-pages"
}
```

This library works by generating files at runtime when running any of the above commands, so you'll want to add the following to your `.gitignore`:

```ignore
# generated files
/dist-dev
/dist
```

## Running

To run a 1 time dev build:

```shell
yarn start
```

To run and watch all for changes to the bookmarks file:

```shell
yarn watch
```

Create a production build in the `dist/` directory:

```shell
yarn build
```

## CLI Docs
