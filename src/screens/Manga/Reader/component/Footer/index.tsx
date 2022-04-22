import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { useTheme } from '../../../../../provider'
import styles from './styles'

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { theme } = useTheme()

  return (
    <View
      style={[
        styles.footer,
        {
          backgroundColor: theme?.colors.background,
        },
      ]}>
      <Text></Text>
    </View>
  )
}
