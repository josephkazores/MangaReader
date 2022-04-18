import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SideDrawer } from './components/index'
import { Screen } from './Screen'

const Drawer = createDrawerNavigator()

export const Library: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
      drawerContent={props => <SideDrawer {...props} />}>
      <Drawer.Screen
        name="Screen"
        component={Screen}
      />
    </Drawer.Navigator>
  )
}
