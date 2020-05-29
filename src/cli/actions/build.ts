import { copyBookmarks } from '../utils';

export default (baseCommand: any) => async (subCommand: any) => {
  const bookmarksFile = baseCommand['bookmarks'];
  copyBookmarks(bookmarksFile);
};
