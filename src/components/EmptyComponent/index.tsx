import React from 'react'
import { Dimensions, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Icon, IconProps } from 'react-native-elements'
import { useTheme } from '../../provider'

interface Props {
  icon: IconProps
  title?: string
}

export const EmptyComponent: React.FC<Props> = ({ icon, title }) => {
  const { theme } = useTheme()
  return (
    <View
      style={{
        marginTop: Dimensions.get('screen').height / 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        color={theme?.colors.disabled}
        size={150}
        tvParallaxProperties
        {...icon}
      />
      <Text
        style={{
          color: theme?.colors.disabled,
          fontSize: 20,
          marginTop: 5,
        }}>
        {title}
      </Text>
    </View>
  )
}
