import React from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { EmptyComponent, Header } from '../../../../components'
import { AnimeCard } from '../../../../components'
import { RootState } from '../../../../store/types'
import { LibraryDrawerProps } from '../../../../types'

export const Screen: React.FC<LibraryDrawerProps> = ({
  navigation: { toggleDrawer },
}) => {
  const { library, preferences } = useSelector(
    (state: RootState) => state.libraryReducer,
  )

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
            onPress: toggleDrawer,
          },
        ]}
      />
      <View style={{ flexGrow: 1, paddingHorizontal: 5 }}>
        <FlatList
          data={library}
          key={preferences.column}
          numColumns={preferences.column}
          renderItem={({ item }) => <AnimeCard {...item} />}
          ListEmptyComponent={
            <EmptyComponent
              icon={{ name: 'ios-library-outline', type: 'ionicon' }}
              title="Add Manga to your Library"
            />
          }
        />
      </View>
    </View>
  )
}
