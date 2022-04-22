import React from 'react'
import { Drawer } from '../../../components'

import { CustomDrawer } from './components/index'
import { Screen } from './Screen'

export const Library: React.FC = () => {
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

