import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View, FlatList } from 'react-native'
import { Text } from 'react-native-paper'

import { Header } from '../../../components'
import { Sources } from '../../../constants'
import { Anime, MangaListProps } from '../../../types'

export const MangaList: React.FC<MangaListProps> = ({
  navigation: { navigate, goBack },
  route: { params },
}) => {
  const [list, setList] = useState<Anime[] | undefined>([])
  const [searchValue, setSearchValue] = useState('')
  const [regex, setRegex] = useState<RegExp>()
  const [loading, setLoading] = useState<boolean>(false)
  const { source, sort, desc } = params

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const data = await Sources[
        source.name as keyof typeof Sources
      ].loadMangaList(sort, desc)
      setLoading(false)
      setList(data)
    })()
  }, [sort, desc, source])

  useEffect(() => {
    if (searchValue) {
      setRegex(new RegExp(searchValue, 'gi'))
    }
  }, [searchValue])

  return (
    <View style={{ flexGrow: 1, paddingBottom: 100 }}>
      <Header
        title={source.name}
        leftAction={{
          name: 'arrow-back',
          type: 'ionicon',
          onPress: () => goBack(),
        }}
        rightActions={[
          {
            name: 'search',
            type: 'material',
            onChangeText: val => setSearchValue(val),
            value: searchValue,
          },
          {
            name: 'filter-variant',
            type: 'material-community',
          },
          {
            name: 'settings',
            type: 'material',
          },
        ]}
      />
      <View style={{ flexGrow: 1 }}>
        <FlatList
          data={
            searchValue
              ? list?.filter(
                  anime =>
                    regex?.test(anime.IndexName || '') ||
                    regex?.test(anime.SeriesName || ''),
                )
              : list
          }
          numColumns={3}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={`${index}-${item.SeriesName}`}
              onPress={() => navigate('MangaDetails', { ...item, source })}
              style={{
                flex: 1 / 3,
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: Sources[
                    source.name as keyof typeof Sources
                  ].image_source(item.IndexName),
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
          )}
        />
      </View>
    </View>
  )
}
