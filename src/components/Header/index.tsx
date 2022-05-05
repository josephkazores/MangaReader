import React, { useState } from 'react'
import { StyleProp, TextInput, View, ViewStyle } from 'react-native'
import { Text } from 'react-native-paper'
import { Icon, IconProps } from 'react-native-elements'

import styles from './styles'
import { useTheme } from '../../provider'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types'
import { Actions } from './components'

export interface ActionProps extends IconProps {
  onChangeText?: (value: any) => void
}

interface Props {
  title?: string
  leftAction?: ActionProps
  rightActions?: ActionProps[]
  containerStyle?: StyleProp<ViewStyle>
}

const SEARCH_DEFAULT_VALUE = {
  onChangeText: (value: string) => {},
  value: '',
  status: false,
}

export declare type ActiveSearch = {
  onChangeText: ((value: string) => void) | undefined
  value: string
  status: boolean
}

export const Header: React.FC<Props> = ({
  leftAction,
  rightActions,
  title,
  containerStyle,
}) => {
  const { goBack, setOptions } =
    useNavigation<StackNavigationProp<RootStackParamList>>()
  const { theme } = useTheme()
  const [activeSearch, setActiveSearch] =
    useState<ActiveSearch>(SEARCH_DEFAULT_VALUE)

  if (!activeSearch.status) {
    setOptions({
      headerShown: true,
      headerStyle: { backgroundColor: theme?.colors.background },
      headerLeft: () => (
        <Actions action={leftAction} setActiveSearch={setActiveSearch} />
      ),
      headerTitle: title,
      headerRight: () => (
        <Actions actions={rightActions} setActiveSearch={setActiveSearch} />
      ),
    })
    return <View style={{marginBottom: 10}}></View>
  }

  setOptions({
    headerShown: false,
  })

  return (
    <View style={[styles.root, containerStyle]}>
      <TextInput
        value={activeSearch?.value}
        onChangeText={value => {
          setActiveSearch(prevState => ({
            ...prevState,
            value: value,
          }))
          activeSearch?.onChangeText?.(value)
        }}
        placeholder="Search"
        placeholderTextColor={theme?.colors.primary}
        style={{
          flex: 1,
          paddingBottom: 5,
          color: theme?.colors.primary,
          borderBottomColor: theme?.colors.primary,
          borderBottomWidth: 1,
          fontSize: 18,
        }}
      />
      <Icon
        name="clear"
        type="material"
        tvParallaxProperties
        color={theme?.colors.primary}
        onPress={() => {
          setActiveSearch(SEARCH_DEFAULT_VALUE)
          setOptions({
            headerShown: true,
          })
        }}
      />
    </View>
  )
}
