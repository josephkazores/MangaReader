import React from 'react'
import { Text } from 'react-native-paper'
import { Pressable, View, useWindowDimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { useTheme } from '../../provider'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

export const BottomTabs: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { theme } = useTheme()
  const { width } = useWindowDimensions()

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 2,
        backgroundColor: theme?.colors.background,
        paddingHorizontal: Math.round(width / (state.routes.length * 4) + 5),
      }}>
      {state.routes.length > 1 &&
        state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <Pressable
              key={label}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}>
              <>
                {options.icon && (
                  <Icon
                    {...options.icon}
                    color={isFocused ? theme?.colors.secondary : theme?.colors.disabled}
                  />
                )}
                <View style={{ height: 5 }} />
                <Text>{label}</Text>
                <View style={{ height: 20 }} />
              </>
            </Pressable>
          )
        })}
    </View>
  )
}
