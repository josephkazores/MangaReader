import React from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { Header } from '../../../components'
import { AnimeCard } from '../../../components/AnimeCard'
import { RootState } from '../../../store/types'

export const Library: React.FC = () => {
  const { library } = useSelector((state: RootState) => state.libraryReducer)

  return (
    <View style={{ flexGrow: 1, paddingBottom: 120 }}>
      <Header
        title="Library"
        leftAction={{
          name: 'search',
          type: 'material',
        }}
        rightActions={[
          {
            name: 'settings',
            type: 'material',
          },
        ]}
      />
      <View style={{ flexGrow: 1 }}>
        <FlatList
          data={library}
          numColumns={3}
          renderItem={({ item }) => <AnimeCard {...item} />}
        />
      </View>
    </View>
  )
}
