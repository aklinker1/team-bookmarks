interface IBookmark {
  name: string;
  icon?: string;
  url: string;
}

interface IFolder {
  name: string;
  children: ReadonlyArray<IFolder | IBookmark>;
}

interface ICategory {
  name: string;
  color?: string;
  children: ReadonlyArray<IFolder | IBookmark>;
}

type BookmarksData = ICategory[];
