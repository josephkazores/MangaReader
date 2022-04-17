import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Header } from '../../../components'
import { Mangasee } from '../../../constants'
import { Anime, RootStackParamList } from '../../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/types'
import { Item } from './components'
import styles from './styles'

export const Browse: React.FC = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { all, pinned } = useSelector(
    (state: RootState) => state.sourcesReducer,
  )

  const [searchValue, setSearchValue] = useState('')

  return (
    <View style={{ flexGrow: 1, paddingBottom: 100 }}>
      <Header
        title="Sources"
        leftAction={{
          name: 'search',
          type: 'material',
          onChangeText: val => setSearchValue(val),
          value: searchValue,
        }}
        rightActions={[
          {
            name: 'settings',
            type: 'material',
          },
        ]}
      />
      <FlatList
        ListHeaderComponent={
          <FlatList
            data={pinned}
            ListHeaderComponent={
              pinned.length > 0 ? (
                <Text style={styles.title}>Pinned</Text>
              ) : (
                <></>
              )
            }
            renderItem={({ item }) => <Item {...item} />}
            ListFooterComponent={
              <Text
                style={[
                  styles.title,
                  { paddingTop: pinned.length > 0 ? 15 : 0 },
                ]}>
                All
              </Text>
            }
          />
        }
        data={all}
        renderItem={({ item }) => <Item {...item} />}
      />
    </View>
  )
}
