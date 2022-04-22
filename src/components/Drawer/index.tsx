import React from 'react'
import { Dimensions } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationOptions,
} from '@react-navigation/drawer'
import { Screens } from '../../types'

const DrawerNav = createDrawerNavigator()


interface Props {
  Screens: Screens
  CustomDrawer?: React.FC<DrawerContentComponentProps>
  screenOptions?: DrawerNavigationOptions
}


export const Drawer: React.FC<Props> = ({ Screens, CustomDrawer, screenOptions }) => {
  return (
    <DrawerNav.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: { width: Dimensions.get('screen').width * 0.6 },
        ...screenOptions
      }}
      drawerContent={
        CustomDrawer ? props => <CustomDrawer {...props} /> : undefined
      }>
      {Screens.map(({ options, ...rest }) => (
        <DrawerNav.Screen {...rest} />
      ))}
    </DrawerNav.Navigator>
  )
}
