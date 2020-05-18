declare module 'vue-masonry' {
  export const VueMasonryPlugin: any;
}
declare module 'vue-ripple-directive' {
  const VueRippleDirective: any;
  export default VueRippleDirective;
}
declare module 'vuedraggable' {
  const draggable: any;
  export default draggable;
}

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
