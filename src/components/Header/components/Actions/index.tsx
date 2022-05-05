import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { Icon } from 'react-native-elements'

import { useTheme } from '../../../../provider'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../types'
import { ActionProps, ActiveSearch } from '../..'

interface Props {
  action?: ActionProps
  actions?: ActionProps[]
  setActiveSearch: React.Dispatch<React.SetStateAction<ActiveSearch>>
  containerStyle?: StyleProp<ViewStyle>
}

export const Actions: React.FC<Props> = ({
  action,
  actions,
  setActiveSearch,
  containerStyle,
}) => {
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 2,
          paddingHorizontal: 15,
        },
        containerStyle,
      ]}>
      {!actions ? (
        <IconComponent action={action} setActiveSearch={setActiveSearch} />
      ) : (
        <>
          {actions.map(value => (
            <IconComponent
              action={value}
              setActiveSearch={setActiveSearch}
              style={{ marginLeft: 10 }}
            />
          ))}
        </>
      )}
    </View>
  )
}

const IconComponent: React.FC<{
  action?: ActionProps
  setActiveSearch: React.Dispatch<React.SetStateAction<ActiveSearch>>
  style?: ViewStyle | TextStyle | undefined
}> = ({ action, setActiveSearch, style }) => {
  const { goBack } = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { theme } = useTheme()
  return (
    <Icon
      name="arrow-back"
      type="material"
      size={22}
      {...action}
      style={{
        ...style,
        ...action?.style,
      }}
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
          : goBack
      }
      tvParallaxProperties
      color={theme?.colors.primary}
    />
  )
}
