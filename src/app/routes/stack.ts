import { TabNavigation } from './../nav';
import { MangaDetails, MangaList, Reader } from '../../screens';

import { Screens } from '../../types'

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
  },
  {
      component: Reader,
      name: "Reader"
  }
]
