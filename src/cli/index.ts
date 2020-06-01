#!/usr/bin/env node

import CLI, { Command } from 'commander';
import start from './actions/start';
import build from './actions/build';
import deploy from './actions/deploy';

(async function main() {
  const program = addGlobalOptions(new Command().version('0.0.1', '-v --version'));

  //#region start
  program.command('start').action(start(program));
  //#endregion

  //#region check
  program.command('build').action(build(program));
  //#endregion

  //#region deploy
  const deployCommand = new Command('deploy');
  deployCommand.command('github:gh-pages').action(deploy.github['gh-pages'](program));
  deployCommand.command('github:docs').action(deploy.github['docs'](program));
  program.addCommand(deployCommand);
  //#endregion

  await program.parseAsync(process.argv);
})();

function addGlobalOptions(command: CLI.Command): CLI.Command {
  return command
    .option(
      '-b --bookmarks <bookmark-file>',
      "Specify the path to your bookmarks file if it is not 'bookmarks.ts' or 'bookmarks.js'"
    )
    .option('--vueConfig <vue-config>', 'Specify the vue config file');
}
