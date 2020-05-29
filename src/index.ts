export default function TeamBookmarks(setup: Partial<Config>): Config {
  return {
    ...setup,
    bookmarks: setup.bookmarks ?? [],
    iconMap: setup.iconMap ?? {},
  };
}
