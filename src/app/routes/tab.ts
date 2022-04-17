import { Browse, Library, Settings } from '../../screens'
import { Screens } from '../../types'

export const homeTab: Screens = [
    {
        component: Library,
        name: "Library",
        options: {
          icon: {
            name: 'book-variant-multiple',
            type: 'material-community',
            size: 30,
          },
        },
    }, 
    {
        component: Browse,
        name: "Browse",
        options: {
          icon: {
            name: 'compass',
            type: 'material-community',
            size: 30,
          },
        },
    }, 
    {
        component: Settings,
        name: "Settings",
        options: {
          icon: {
            name: 'settings',
            type: 'material',
            size: 30,
          },
        },
    }
]
