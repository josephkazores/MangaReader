import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'

import { Sources } from '../../constants'
import { Anime, RootStackParamList } from '../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'

export const AnimeCard: React.FC<Anime> = item => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { preferences } = useSelector((state: RootState) => state.libraryReducer)

  return (
    <TouchableOpacity
      key={`${item.SeriesName} ${item.author?.join('')}`}
      onPress={() => navigate('MangaDetails', item)}
      style={{
        flex: 1 / preferences.column,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: Sources[item.source.name as keyof typeof Sources].image_source(
            item.IndexName,
          ),
        }}
        style={{
          height: (Dimensions.get('screen').width / (preferences.column + 0.5)) * 1.5,
          width: Dimensions.get('screen').width / (preferences.column + 0.5),
          alignItems: 'center',
        }}
      />
      <View
        style={{
          paddingBottom: 5,
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text numberOfLines={2} style={{ fontWeight: '600' }}>
          {item.SeriesName}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
