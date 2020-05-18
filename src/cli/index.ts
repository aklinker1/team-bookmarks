import CLI, { Command } from 'commander';
import start from './actions/start';
import watch from './actions/watch';
import check from './actions/check';
import deploy from './actions/deploy';

(async function main() {
  CLI.description('team-bookmarks helper tool')
    .version('0.0.1', '-v --version')
    .option(
      '-b --bookmarks <bookmark-file>',
      "Specify the path to your bookmarks file if it is not 'bookmarks.ts' or 'bookmarks.js'"
    );

  //#region start
  CLI.command('start').action(start);
  //#endregion

  //#region watch
  CLI.command('watch').action(watch);
  //#endregion

  //#region check
  CLI.command('check').action(check);
  //#endregion

  //#region deploy
  const deployCommand = new Command('deploy');
  deployCommand.command('github:gh-pages').action(deploy.github['gh-pages']);
  deployCommand.command('github:docs').action(deploy.github['docs']);
  CLI.addCommand(deployCommand);
  //#endregion

  await CLI.parseAsync(process.argv);
})();
