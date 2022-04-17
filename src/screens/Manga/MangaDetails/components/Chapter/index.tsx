import React from 'react'
import moment from 'moment'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Chapter as ChapterProps } from '../../../../../types'
import { useTheme } from '../../../../../provider'
import { Icon } from 'react-native-elements'

export const Chapter: React.FC<ChapterProps> = item => {
    const {theme} = useTheme()

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: theme?.colors.border,
        borderBottomWidth: 1
      }}>
      <View>
        <Text>
          {item.Type} {item.Chapter}
        </Text>
        <Text style={{fontSize: 13, marginTop: 3}}>{moment(item.Date).format('MMMM DD, YYYY')}</Text>
      </View>
      <Icon name="ios-ellipsis-vertical-sharp" type="ionicon" tvParallaxProperties color={theme?.colors.primary}/>
    </TouchableOpacity>
  )
}
