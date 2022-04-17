import { TabNavigation } from './../nav/TabNavigation';

import { Screens } from '../../types'
import { MangaDetails, MangaList } from '../../screens';

export const stack: Screens = [
  {
      component: TabNavigation,
      name: "Home",
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
