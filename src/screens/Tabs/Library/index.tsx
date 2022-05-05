import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import { useSelector } from 'react-redux'

import { EmptyComponent, Header } from '../../../components'
import { AnimeCard } from '../../../components'
import { ModalContext, ModalProvider } from '../../../provider'
import { RootState } from '../../../store/types'
import { RootStackParamList } from '../../../types'
import { Modal } from './components'

export const Library: React.FC = () => {
  const {setOptions} = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { library, preferences } = useSelector(
    (state: RootState) => state.libraryReducer,
  )

  return (
    <ModalProvider modalContent={<Modal />}>
      <View style={{ flexGrow: 1, paddingBottom: 120 }}>
        <ModalContext.Consumer>
          {({ toggleModal }) => (
            <Header
              title="Library"
              leftAction={{
                name: 'search',
                type: 'material',
              }}
              rightActions={[
                {
                  name: 'filter-variant',
                  type: 'material-community',
                  onPress: toggleModal,
                },
              ]}
            />
          )}
        </ModalContext.Consumer>
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
    </ModalProvider>
  )
}
