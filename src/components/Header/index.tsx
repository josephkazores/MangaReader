import React, { useState } from 'react'
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import { Text } from 'react-native-paper'
import { Icon, IconProps } from 'react-native-elements'

import styles from './styles'
import { useTheme } from '../../provider'

interface ActionProps extends IconProps {
  onChangeText?: (value: any) => void
  value?: any
}

interface Props {
  title?: string
  leftAction?: ActionProps
  rightActions?: ActionProps[]
  containerStyle?: ViewStyle
}

export const Header: React.FC<Props> = ({
  leftAction,
  rightActions,
  title,
  containerStyle
}) => {
  const { theme } = useTheme()
  const [activeSearch, setActiveSearch] = useState(false)

  return (
    <View style={[styles.root, containerStyle]}>
      {activeSearch ? (
        <>
          <TextInput
            value={leftAction?.value}
            onChangeText={leftAction?.onChangeText}
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
            onPress={() => {
              setActiveSearch(false)
              leftAction?.onChangeText?.('')
            }}
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
                  ? () => setActiveSearch(true)
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
                    ? () => setActiveSearch(true)
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
