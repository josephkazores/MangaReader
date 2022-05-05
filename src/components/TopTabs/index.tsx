import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Screens } from '../../types'
import { CustomTabs } from './component'

interface Props {
  screens: Screens
}

const Tab = createMaterialTopTabNavigator()

export const TopTabs: React.FC<Props> = ({ screens }) => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabs {...props} />}>
      {screens.map(({ options, ...rest }) => (
        <Tab.Screen {...rest} />
      ))}
    </Tab.Navigator>
  )
}
