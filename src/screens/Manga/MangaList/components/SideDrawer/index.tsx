import React from 'react'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

export const SideDrawer: React.FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View></View>
    </DrawerContentScrollView>
  )
}
