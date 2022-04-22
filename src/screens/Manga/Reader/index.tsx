import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { Header } from '../../../components'
import { Sources } from '../../../constants'
import { AppDispatch } from '../../../store/types'

import { ReaderProps } from '../../../types'
import { Item } from './component'

export const Reader: React.FC<ReaderProps> = ({ route }) => {
    const dispatch = useDispatch<AppDispatch>()
  const {
    animeTitle,
    chapter,
    source,
  } = route.params

  const [images, setImages] = useState<string[]>([])
  
  useEffect(() => {
    if (animeTitle && chapter) {
      ;(async () => {
        const data = await Sources[
          source.name as keyof typeof Sources
        ].loadChapterImages(animeTitle, chapter)
        data && setImages(data)
      })()
    }
    dispatch({ type: 'TOGGLE_STATUS_BAR' })
  }, [route])

  return (
    <View>
      {/* <Header title={chapter+''} /> */}
      <FlatList data={images} renderItem={({ item }) => <Item uri={item} />} />
    </View>
  )
}
