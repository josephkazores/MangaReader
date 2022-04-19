import { debounce } from 'lodash'
import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { Header, AnimeCard } from '../../../../components'
import { Sources } from '../../../../constants'
import { RootState } from '../../../../store/types'
import { Anime, MangaListDrawerProps } from '../../../../types'

export const Screen: React.FC<MangaListDrawerProps> = ({
  navigation: { navigate, goBack, toggleDrawer},
  route: { params },
}) => {
  const { preferences } = useSelector((state: RootState) => state.libraryReducer)
  const [list, setList] = useState<Anime[] | undefined>([])
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
            onChangeText: debounce(val =>  setRegex(new RegExp(val, 'gi'))),
          },
          {
            name: 'filter-variant',
            type: 'material-community',
            onPress: toggleDrawer,
          },
        ]}
      />
      <View style={{ flexGrow: 1, paddingHorizontal: 5 }}>
        <FlatList
          data={
            regex
              ? list?.filter(
                  anime =>
                    regex?.test(anime.IndexName || '') ||
                    regex?.test(anime.SeriesName || ''),
                )
              : list
          }
          key={preferences.column}
          numColumns={preferences.column}
          renderItem={({ item }) => <AnimeCard {...item} />}
        />
      </View>
    </View>
  )
}