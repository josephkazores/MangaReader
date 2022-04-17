import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Image, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'

import { Sources } from '../../constants'
import { Anime, RootStackParamList } from '../../types'

export const AnimeCard: React.FC<Anime> = item => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <TouchableOpacity
      key={`${item.SeriesName}`}
      onPress={() => navigate('MangaDetails', item)}
      style={{
        flex: 1 / 3,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: Sources[item.source.name as keyof typeof Sources].image_source(
            item.IndexName,
          ),
        }}
        style={{ height: 185, width: 125, alignItems: 'center' }}
      />
      <View
        style={{
          paddingBottom: 10,
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text numberOfLines={2} style={{ fontWeight: '600' }}>
          {item.IndexName}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
