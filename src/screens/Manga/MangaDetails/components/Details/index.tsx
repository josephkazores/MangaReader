import React, { useEffect, useState } from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

import { Sources } from '../../../../../constants'
import { useTheme } from '../../../../../provider'
import { AppDispatch, RootState } from '../../../../../store/types'
import { Anime } from '../../../../../types'

export const Details: React.FC<Anime> = item => {
  const { library } = useSelector((state: RootState) => state.libraryReducer)
  const dispatch = useDispatch<AppDispatch>()
  const { theme } = useTheme()
  const { IndexName, author, status, source, SeriesName } = item

  const [addedToLibrary, setAddedToLibrary] = useState<boolean>(false)

  useEffect(() => {
    if (library.length > 0) {
      const ids: string[] = []
      library.map(anime => ids.push(anime.IndexName))
      setAddedToLibrary(ids.includes(IndexName))
    } else {
      setAddedToLibrary(false)
    }
  }, [library, IndexName])

  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri: Sources[source.name as keyof typeof Sources].image_source(
              IndexName,
            ),
          }}
          style={{ height: 180, width: 120, borderRadius: 5 }}
        />
        <View style={{ padding: 15, flexGrow: 1, justifyContent: 'flex-end' }}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={{
              fontSize: 26,
              fontWeight: '700',
              width: Dimensions.get('screen').width - 150,
            }}>
            {SeriesName}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              width: Dimensions.get('screen').width - 170,
              marginTop: 5,
            }}
            numberOfLines={2}
            ellipsizeMode="tail">
            {author?.join(', ')}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 5 }}>
            {status?.scan}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 5 }}>
            {source?.name} ({source?.language.toUpperCase()})
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          onPress={() =>
            addedToLibrary
              ? dispatch({ type: 'REMOVE_TO_LIBRARY', payload: item })
              : dispatch({ type: 'ADD_TO_LIBRARY', payload: item })
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: addedToLibrary
              ? theme?.colors.tertiary
              : 'transparent',
            borderColor: theme?.colors.tertiary,
            borderWidth: 2,
            paddingVertical: 3,
            paddingHorizontal: 15,
            borderRadius: 15,
          }}>
          <Icon
            name={addedToLibrary ? 'heart' : 'heart-outline'}
            type="ionicon"
            tvParallaxProperties
            size={20}
            color={theme?.colors.secondary}
          />
          <Text style={{ marginLeft: 5 }}>in Library</Text>
        </TouchableOpacity>
        <Icon
          name="globe"
          type="entypo"
          tvParallaxProperties
          size={20}
          color={theme?.colors.tertiary}
          style={{
            marginLeft: 10,
          }}
        />
        <Icon
          name="share-social"
          type="ionicon"
          tvParallaxProperties
          size={20}
          color={theme?.colors.tertiary}
          style={{
            marginLeft: 10,
          }}
        />
      </View>
    </View>
  )
}
