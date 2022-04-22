import React, { useState } from 'react'
import {View, FlatList } from 'react-native'
import { Text } from 'react-native-paper'

import { Header } from '../../../components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/types'
import { Item } from './components'
import styles from './styles'

export const Browse: React.FC = () => {
  const { all, pinned } = useSelector(
    (state: RootState) => state.sourcesReducer,
  )


  return (
    <View style={{ flexGrow: 1, paddingBottom: 100 }}>
      <Header
        title="Sources"
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
