interface VuexState {
  sortOrder: SortOrderMap;
  isLightTheme: boolean;
  minimizedPaths: { [path: string]: boolean };
}

type SortOrderMap = { [title: string]: number | undefined };
