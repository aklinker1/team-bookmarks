import path from 'path';
import { copyFileSync, readdirSync, unlinkSync, existsSync, lstatSync, rmdirSync } from 'fs';
import { execSync } from 'child_process';

export async function zipVue() {
  const { zip } = await import('zip-a-folder');
  try {
    const vueNodeModules = relativePath('src', 'vue', 'node_modules');
    deleteFolderRecursive(vueNodeModules);
  } catch (err) {}

  await zip(relativePath('src', 'vue'), relativePath('dist', 'vue.zip'));
}

export function relativePath(...filenames: string[]): string {
  return path.join(__dirname, '..', '..', ...filenames);
}

export function copyBookmarks(bookmarksFile: string) {
  copyFileSync(
    path.join(process.cwd(), bookmarksFile),
    path.join(
      process.cwd(),
      'node_modules',
      'team-bookmarks',
      'dist',
      'team-bookmarks-vue',
      'src',
      'bookmarks.ts'
    )
  );
}

export function prepare() {
  const cwd = path.join(
    process.cwd(),
    'node_modules',
    'team-bookmarks',
    'dist',
    'team-bookmarks-vue'
  );
  let modulesExist = false;
  try {
    readdirSync(
      path.join(
        process.cwd(),
        'node_modules',
        'team-bookmarks',
        'dist',
        'team-bookmarks-vue',
        'node_modules'
      )
    );
    modulesExist = true;
  } catch (err) {
    modulesExist = false;
  }
  if (!modulesExist) {
    console.log('Installing dependencies');
    execSync('npm i', { cwd, stdio: 'inherit' });
  }
}

function deleteFolderRecursive(folder: string) {
  if (existsSync(folder)) {
    readdirSync(folder).forEach((file, index) => {
      const curPath = path.join(folder, file);
      if (lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        unlinkSync(curPath);
      }
    });
    rmdirSync(folder);
  }
}
