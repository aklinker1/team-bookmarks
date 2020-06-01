import unzip from 'extract-zip';
import { readFileSync } from 'fs';
import path from 'path';
import { relativePath } from '../cli/utils';

try {
  readFileSync(path.join(process.cwd(), '.no-postinstall'));
  console.log('Skipping post-install');
  process.exit(0);
} catch (err) {
  // continue
}

try {
  const input = relativePath('dist', 'vue.zip');
  const outDir = relativePath('dist', 'team-bookmarks-vue');
  console.log('unzipping ' + input + ' to ' + outDir);
  unzip(input, { dir: outDir });
} catch (err) {
  console.log(
    'WARNING: Attempted to extract node_modules/team-bookmarks/vue.zip, but could not. Have you ran the build script yet?'
  );
}
