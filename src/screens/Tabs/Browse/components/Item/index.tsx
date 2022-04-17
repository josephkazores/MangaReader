import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useTheme } from '../../../../../provider'
import { AppDispatch, RootState } from '../../../../../store/types'

import { RootStackParamList, Source } from '../../../../../types'
import styles from './styles'

export const Item: React.FC<Source> = item => {
  const { theme } = useTheme()
  const { pinned } = useSelector((state: RootState) => state.sourcesReducer)
  const dispatch = useDispatch<AppDispatch>()
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()

  const [status, setStatus] = useState<boolean>(false)

  useEffect(() => {
    if (pinned.length > 0) {
      const ids: number[] = []
      pinned.map(source => ids.push(source.id))
      setStatus(ids.includes(item.id))
    } else {
      setStatus(false)
    }
  }, [pinned])

  return (
    <TouchableOpacity style={styles.root}
    onPress={() =>
      navigate('MangaList', { source: item, sort: 'v', desc: true })
    }>
      <View style={styles.container}>
        <Image source={item.logo} style={{ height: 30, width: 30 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>
          {item.name} ({item.language.toUpperCase()})
        </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigate('MangaList', { source: item, sort: 'lt', desc: true })
          }>
          <Text
            style={{
              fontSize: 16,
              textDecorationLine: 'underline',
              textDecorationColor: theme?.colors.secondary,
              color: theme?.colors.secondary,
            }}>
            View Latest
          </Text>
        </TouchableOpacity>
        <Icon
          name={!status ? 'pin-outline' : 'pin'}
          type="material-community"
          tvParallaxProperties
          color={!status ? theme?.colors.primary : theme?.colors.secondary}
          style={{ marginLeft: 10 }}
          onPress={() =>
            !status
              ? dispatch({ type: 'ADD_PINNED_SOURCE', payload: item })
              : dispatch({ type: 'REMOVE_PINNED_SOUCE', payload: item })
          }
        />
      </View>
    </TouchableOpacity>
  )
}
