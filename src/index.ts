export interface Bookmark {
  name: string;
  icon?: string;
  url: string;
}

export interface Folder {
  name: string;
  children: ReadonlyArray<Folder | Bookmark>;
}

export interface Category {
  name: string;
  color?: string;
  children: ReadonlyArray<Folder | Bookmark>;
}
export interface Config {
  bookmarks: Category[];
  iconMap?: { [domain: string]: string };
  title?: string;
  repoUrl?: String;
}

export default function TeamBookmarks(setup: Partial<Config>): Config {
  return {
    ...setup,
    bookmarks: setup.bookmarks ?? [],
    iconMap: setup.iconMap ?? {},
  };
}
