import { as } from '@/Utils';

export default as<VuexState>({
  isLightTheme: false,
  sortOrder: {
    'Expert App': 0,
    'Execution Microservice': 1,
    'Expert Services Backend': 2,
    'Expert App Web': 3,
    Miscellaneous: 4,
    'Account Management': 5,
  },
  minimizedPaths: {},
});
