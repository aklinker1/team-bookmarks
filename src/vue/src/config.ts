import config from '@/bookmarks';

interface Config {
    bookmarks: any[];
    iconMap: { [domain: string]: string };
    title?: string;
    repoUrl?: string;
}

export default config as Config;
