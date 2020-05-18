# Deploy

You can read more about the `team-bookmarks` command in the [CLI documentation]().

You can deploy the `dist/` directory however you like, but this library is shipped with a `deploy` command that will deploy directly to github pages!

<br/>

## Basic Deployment

For example, to deploy to the github project stored at your git origin, simply run:

```bash
team-bookmarks deploy github:gh-pages
```

> The `team-bookmarks` command is available inside your `package.json` scripts or at `./node_modules/.bin/team-bookmarks`

### Build-in Hosting Location Support

The `deploy` command supports the following host locations:

- `github:gh-pages` - Host from the `origin/gh-pages` branch
- `github:docs` - Host from the `docs/` folder on the `origin/master` branch

<br/>

## Advanced Deployment

To deploy to anywhere else, simply run a production build and then upload the `dist/` directory to wherever you want to host your bookmarks website.
