interface SetupOptions {
  title?: string;
  bookmarks: ICategory[];
  iconMap: { [domain: string]: string };
}

export default function TeamBookmarks(setup: SetupOptions): SetupOptions {
  return setup;
}
