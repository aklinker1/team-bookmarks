import { copyBookmarks, prepare } from '../utils';
import { execSync } from 'child_process';
import path from 'path';

export default (baseCommand: any) => async (subCommand: any) => {
  const bookmarksFile = baseCommand['bookmarks'];
  // const packageManager = baseCommand['packageManager'] === 'yarn' ? 'yarn' : 'npm';

  prepare();
  copyBookmarks(bookmarksFile);

  const cwd = path.join(
    process.cwd(),
    'node_modules',
    'team-bookmarks',
    'dist',
    'team-bookmarks-vue'
  );

  execSync('npm run start', {
    cwd,
    stdio: 'inherit',
  });
};
