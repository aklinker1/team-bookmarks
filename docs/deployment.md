# Deploy

You can read more about the `team-bookmarks` command in the [CLI documentation]().

Before doing anything, make sure to setup your Vue config. Below is what I would recommend to start off with.

```js
// vue.config.js
const path = require('path');

module.exports = {
  // Paths here must be absolute. This will create a folder called `dist` next to this file
  outputDir: path.join(__dirname, 'dist'),
};
```

Once that is setup, simply run `yarn build` to build a production distribution. You can deploy the `dist/` directory however you like, but this library is shipped with a `deploy` command that will help deploy to several different hosts!

<br/>

## `team-bookmarks deploy`

For example, to deploy to the github project stored at your git origin, simply run:

```bash
team-bookmarks deploy github:gh-pages
```

> The `team-bookmarks` command is available inside your `package.json` scripts or at `./node_modules/.bin/team-bookmarks`

### Build-in Hosting Location Support

The `deploy` command supports the following host locations:

- `github:gh-pages` - Host from the `origin/gh-pages` branch
- `github:docs` - Host from the `docs/` folder on the `origin/master` branch

See the [CLI documentation]() for information and examples of how to use each of these deploy locations
