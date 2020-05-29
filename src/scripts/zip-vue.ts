import { zipVue, relativePath } from '../cli/utils';
import { mkdirSync } from 'fs';

try {
  mkdirSync(relativePath('dist'));
} catch (err) {
  // do nothing if it existed already
}
zipVue();
