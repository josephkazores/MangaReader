import React, { useEffect, useRef, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Header } from '../../../components'
import { Sources } from '../../../constants'
import { useTheme } from '../../../provider'
import { AppDispatch } from '../../../store/types'

import { ReaderProps } from '../../../types'
import { Footer, Item } from './component'
import styles from './styles'

export const Reader: React.FC<ReaderProps> = ({ route }) => {
  const dispatch = useDispatch<AppDispatch>()
  const {theme} = useTheme()
  const { anime: {IndexName, SeriesName, source}, chapter  } = route.params

  const [images, setImages] = useState<string[]>([])
  const [headerVisible, setHeaderVisible] = useState(true)

  useEffect(() => {
    if (IndexName && chapter) {
      ;(async () => {
        const data = await Sources[
          source.name as keyof typeof Sources
        ].loadChapterImages(IndexName, chapter)
        data && setImages(data)
      })()
    }
    
  }, [route])

  return (
    <View style={{ flexGrow: 1 }}>
      {headerVisible && (
        <Header
          title={SeriesName}
          rightActions={[
            {
              name: 'settings',
              type: 'material',
            },
          ]}
          containerStyle={[
            styles.headerStyle,
            {
              backgroundColor: theme?.colors.background,
            },
          ]}
        />
      )}
      <FlatList
        data={images}
        onScrollBeginDrag={() => {
          setHeaderVisible(false)
          dispatch({ type: 'HIDE_STATUS_BAR' })
        }}
        renderItem={({ item }) => (
          <Item
            uri={item}
            onPress={() => {
              setHeaderVisible(prevState => !prevState)
              dispatch({ type: 'TOGGLE_STATUS_BAR' })
            }}
          />
        )}
      />
      {headerVisible && <Footer />}
    </View>
  )
}
