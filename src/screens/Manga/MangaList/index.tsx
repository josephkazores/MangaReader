import React from 'react'
import { Drawer } from '../../../components'

import { CustomDrawer } from './components'
import { Screen } from './Screen'

export const MangaList: React.FC = () => {
  return (
    <Drawer
      Screens={[
        {
          component: Screen,
          name: 'Screen',
        },
      ]}
      CustomDrawer={CustomDrawer}
    />
  )
}
