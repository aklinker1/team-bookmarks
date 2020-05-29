interface Bookmark {
  name: string;
  icon?: string;
  url: string;
}

interface Folder {
  name: string;
  children: ReadonlyArray<Folder | Bookmark>;
}

interface Category {
  name: string;
  color?: string;
  children: ReadonlyArray<Folder | Bookmark>;
}

declare interface Config {
  bookmarks: Category[];
  iconMap?: { [domain: string]: string };
  title?: string;
  repoUrl?: String;
}
