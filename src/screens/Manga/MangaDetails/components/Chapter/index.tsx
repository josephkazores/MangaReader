import React from 'react'
import moment from 'moment'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Icon } from 'react-native-elements'

import {
  Anime,
  Chapter as ChapterProps,
  RootStackParamList,
} from '../../../../../types'
import { useTheme } from '../../../../../provider'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props extends ChapterProps {
  anime: Anime
}

export const Chapter: React.FC<Props> = ({anime, ...item}) => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { theme } = useTheme()
  const { source } = anime

  return (
    <TouchableOpacity
      onPress={() =>
        navigate('Reader', {
          anime: anime,
          chapter: item,
        })
      }
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: theme?.colors.border,
        borderBottomWidth: 1,
      }}>
      <View>
        <Text>
          {item.Type} {item.Chapter}
        </Text>
        <Text style={{ fontSize: 13, marginTop: 3 }}>
          {moment(item.Date).format('MMMM DD, YYYY')}
        </Text>
      </View>
      <Icon
        name="ios-ellipsis-vertical-sharp"
        type="ionicon"
        tvParallaxProperties
        color={theme?.colors.primary}
      />
    </TouchableOpacity>
  )
}
