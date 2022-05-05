import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { useTheme } from '../../../../provider'
import { Text } from 'react-native-paper'

export const CustomTabs: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  const { theme } = useTheme()
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel || options.title || route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        const inputRange = state.routes.map((_, i) => i)
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        })

        return (
          <TouchableOpacity
            key={`${label}-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderBottomColor: isFocused
                  ? theme?.colors.primary
                  : 'transparent',
                borderBottomWidth: 2,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  color: isFocused
                    ? theme?.colors.primary
                    : theme?.colors.disabled,
                  fontSize: 16,
                  fontWeight: '500',
                  textTransform: 'uppercase',
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
