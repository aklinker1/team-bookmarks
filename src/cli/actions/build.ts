import { copyBookmarks, prepare } from '../utils';
import { execSync } from 'child_process';
import path from 'path';

export default (baseCommand: any) => async (subCommand: any) => {
  const bookmarksFile = baseCommand['bookmarks'];
  const vueConfig = path.join(process.cwd(), baseCommand['vueConfig'] || 'vue.config.js');

  prepare();
  copyBookmarks(bookmarksFile);

  const cwd = path.join(
    process.cwd(),
    'node_modules',
    'team-bookmarks',
    'dist',
    'team-bookmarks-vue'
  );

  execSync(`VUE_CLI_SERVICE_CONFIG_PATH=${vueConfig} npm run build`, {
    cwd,
    stdio: 'inherit',
  });
};
