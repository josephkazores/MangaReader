import React, { useEffect, useState } from 'react'
import { FlatList, ImageBackground, View, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ImageColors from 'react-native-image-colors'

import { Header } from '../../../components'
import { Sources } from '../../../constants'
import { useTheme } from '../../../provider'

import { Chapter as ChapterTypes, MangaDetailsProps } from '../../../types'
import { hexToRgb } from '../../../utils'
import { Chapter, Details } from './components'

export const MangaDetails: React.FC<MangaDetailsProps> = ({
  route,
  navigation,
}) => {
  const { theme } = useTheme()

  const [list, setList] = useState<
    | {
        chapters: any | ChapterTypes[]
      }
    | undefined
  >()
  const [searchValue, setSearchvalue] = useState('')
  const [fadeColor, setFadeColor] = useState('rgba(0,0,0,0.8)')
  const { IndexName, source, chapters } = route.params

  const RightActions = [
    {
      name: 'search',
      type: 'material',
      value: searchValue,
      onChangeText: (value: string) => setSearchvalue(value),
    },
    {
      name: 'download',
      type: 'material-community',
    },
    {
      name: 'settings',
      type: 'material',
    },
  ]

  useEffect(() => {
    if (chapters && chapters?.length > 0) {
      setList(prevState => ({ ...prevState, chapters: chapters }))
    } else {
      ;(async () => {
        const data = await Sources[
          source.name as keyof typeof Sources
        ].loadMangaDetails(IndexName)
        setList(data)
      })()
    }
  }, [IndexName, source, chapters])

  useEffect(() => {
    if (IndexName) {
      ;(async () => {
        try {
          const result = await ImageColors.getColors(
            Sources[source.name as keyof typeof Sources].image_source(
              IndexName,
            ),
          )
          switch (result.platform) {
            case 'ios':
              setFadeColor(hexToRgb(result.secondary, 0.7))
              break
            default:
              throw new Error('Unexpected platform key')
          }
        } catch (error) {
          console.error(error)
        }
      })()
    }
  }, [route])

  return (
    <View style={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri: Sources[source.name as keyof typeof Sources].image_source(
            IndexName,
          ),
        }}
        style={{
          height: 250,
          width: Dimensions.get('screen').width,
          position: 'absolute',
        }}>
        <LinearGradient
          colors={[fadeColor, hexToRgb(theme?.colors.background || '', 0.999)]}
          style={[
            {
              flexGrow: 1,
            },
          ]}
        />
      </ImageBackground>
      <Header
        leftAction={{
          name: 'arrow-back',
          type: 'ionicons',
          onPress: () => navigation.goBack(),
        }}
        rightActions={RightActions}
      />
      <View style={{ flexGrow: 1 }}>
        <Details {...route.params} />
        <FlatList
          data={chapters || list?.chapters}
          style={{
            flex: 1,
            marginTop: 15,
            borderColor: theme?.colors.border,
            borderTopWidth: 1,
          }}
          renderItem={({ item }) => <Chapter {...item} />}
        />
      </View>
    </View>
  )
}
