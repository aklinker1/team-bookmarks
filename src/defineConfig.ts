export interface Config {
  bookmarks: ICategory[];
  iconMap?: { [domain: string]: string };
  title?: string;
  repoUrl?: string;
}

export function defineConfig(config: Config): Config {
  return config;
}
