import { TabNavigation } from './../nav';
import { MangaDetails, MangaList } from '../../screens';

import { Screens } from '../../types'

export const stack: Screens = [
  {
      component: TabNavigation,
      name: "Library",
  },
  {
      component: MangaDetails,
      name: "MangaDetails",
  },
  {
      component: MangaList,
      name: "MangaList",
  }
]
