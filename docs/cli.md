# CLI Documentation

The CLI is just a wrapper around `vue-cli-services`. It works by calling the Vue CLI commands from inside the `node_modules/team-bookmarks/dist/team-bookmarks-vue` directory. This is the directory where all the vue files that make up the page are at.

The first time you run any of these commands, it will install dependencies necessary for the Vue project. It will not install these dependencies again.

> For this reason, if you update or modify your project structure changes, please delete your `node_modules` folder and re-install the dependencies.

## Global Options

### Options:

- **`-b --bookmarks`**
  - Specify the path to the file containing your bookmarks configuration
  - _Default_: `bookmarks.ts`
- **`-c --vueConfig`**
  - Specify the path to your vue configuration
  - _Default_: `vue.config.js`
- **`-v --version`**
  - Print the current version of the tool

### Examples

```bash
# Example 1 - Defaults
$ pwd
bookmarks.ts vue.config.js
$ yarn team-bookmarks start
```

```bash
# Example 2 - Custom Paths
$ pwd
bookmark-config.js vue.config.json
$ yarn team-bookmarks -b bookmark-config.js -c vue.config.json start
```

## `start` command

The start command starts the vue webpack dev server. Note that for this command, a vue config files is not required, but still recommended.

### Examples

```bash
yarn team-bookmarks -b bookmarks.js start
```

## `build` command

The build command builds the project and generates the distribution output through webpack. This is the command where having a Vue config file will be helpful, even almost required.

### Examples

```bash
yarn team-bookmarks -c vue.config.json build
```

## `deploy` command

There are several subcommands that you can use with `deploy`:

- `github:gh-pages`
- `github:docs`

Each of them have the following options

#### Options

- **`--branch`**
  - Specify the branch the deploy will push to
  - _Default_: `master`

## `deploy github:gh-pages` command

Deploy your project to the git repository's `origin/gh-pages` branch. This will effectively run `build`, then force push your `dist/` folder to `origin/gh-pages` (or the `--branch` option you pass in).

For this deployment, make sure to set your `publicPath` in the vue config. For more information on what to set the public path to, checkout this answer on [Stack Overflow]().

### Examples

```bash
# Push the dist folder to "some-other-branch"
yarn team-bookmarks deploy --branch "some-other-branch" github:gh-pages
```

## `deploy github:docs` command

Deploy your project by including a `docs` folder in your version control. This command works by running `build`, then pushing to `origin/master` (or the `--branch` option you pass in), effectively updating the `docs/` folder on github.

For this deployment, make sure to set your `publicPath` in the Vue config. For more information on what to set the public path to, checkout this answer on [Stack Overflow]().

### Examples

```bash
# Push the current code to the "release" branch
yarn team-bookmarks deploy --branch release github:docs
```
