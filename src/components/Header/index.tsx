import React, { useState } from 'react'
import { TextInput, View, ViewStyle } from 'react-native'
import { Text } from 'react-native-paper'
import { Icon, IconProps } from 'react-native-elements'

import styles from './styles'
import { useTheme } from '../../provider'

interface ActionProps extends IconProps {
  onChangeText?: (value: any) => void
}

interface Props {
  title?: string
  leftAction?: ActionProps
  rightActions?: ActionProps[]
  containerStyle?: ViewStyle
}

const SEARCH_DEFAULT_VALUE = {
  onChangeText: (value: string) => {},
  value: '',
  status: false,
}

declare type ActiveSearch = {
  onChangeText: ((value: string) => void ) | undefined,
  value: string,
  status: boolean,
}

export const Header: React.FC<Props> = ({
  leftAction,
  rightActions,
  title,
  containerStyle,
}) => {
  const { theme } = useTheme()
  const [activeSearch, setActiveSearch] =
    useState<ActiveSearch>(SEARCH_DEFAULT_VALUE)

  return (
    <View style={[styles.root, containerStyle]}>
      {activeSearch.status ? (
        <>
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
              padding: 5,
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
            onPress={() => setActiveSearch(SEARCH_DEFAULT_VALUE)}
          />
        </>
      ) : (
        <>
          <View style={styles.lac}>
            <Icon
              {...leftAction}
              style={{
                fontSize: 25,
                ...leftAction?.style,
              }}
              onPress={
                leftAction?.onPress
                  ? leftAction?.onPress
                  : leftAction?.name === 'search'
                  ? () =>
                      setActiveSearch({
                        value: '',
                        onChangeText: leftAction?.onChangeText,
                        status: true,
                      })
                  : () => {}
              }
              tvParallaxProperties
              color={theme?.colors.primary}
            />
          </View>
          <View style={[styles.lac, { justifyContent: 'center' }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.rac}>
            {rightActions?.map(action => (
              <Icon
                {...action}
                onPress={
                  action?.onPress
                    ? action?.onPress
                    : action?.name === 'search'
                    ? () =>
                        setActiveSearch({
                          value: '',
                          onChangeText: action?.onChangeText,
                          status: true,
                        })
                    : () => {}
                }
                tvParallaxProperties
                color={theme?.colors.primary}
                style={{ marginLeft: 15, fontSize: 25, ...action.style }}
              />
            ))}
          </View>
        </>
      )}
    </View>
  )
}
