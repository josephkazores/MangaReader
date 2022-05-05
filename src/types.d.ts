import { DrawerScreenProps } from '@react-navigation/drawer'
import { NavigatorScreenParams } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ReactNode } from 'react'
import { ImageSourcePropType, ViewStyle } from 'react-native'

export declare type Icon = {
  name: string
  type:
    | 'antdesign'
    | 'entypo'
    | 'evilicon'
    | 'feather'
    | 'font-awesome'
    | 'font-awesome-5'
    | 'fontisto'
    | 'foundation'
    | 'ionicon'
    | 'material'
    | 'material-community'
    | 'octicon'
    | 'simple-line-icon'
    | 'zocial'
  size: number
}

declare type Content =
  | {
      type: 'checkbox' | 'radio'
      value: boolean
      title: string
      onPress?: () => void
    }
  | {
      type: 'input'
      title: string
      onChangeText?: (value: string) => void
    }
  | {
      type: 'button'
      title: string
      icon?: Icon
      onPress?: () => void
    }
  | {
      type: 'select'
      title: string
      onChangeSelect: (value: string) => void
      data: {
        name: string
        value: string
      }[]
    }

export declare type Filter = {
  name: string
  type?: 'dropdown'
  content: Content[]
  style?: ViewStyle
}

////---- Anime Types ----////

export declare type Anime = {
  source: Source
  IndexName: string
  SeriesName?: string
  chapters?: Chapter[]
  author?: string[]
  alternateTitle?: string[]
  genres?: string[]
  lastChapter?: number
  lastUpdate?: string
  officialTranslation?: boolean
  tag?: string
  status?: {
    publish: string
    scan: string
  }
  sort: {
    v: string
    vm: string
    y: string
    lt: string
    s: string
  }
}

export declare type Source = {
  id: number
  name: string | any
  language: string
  logo: ImageSourcePropType
}

export declare type Chapter = {
  Chapter: number
  Type?: string
  Date?: string
  ChapterName?: object[]
  index: number
}


////---- Root Navigation Params Types ----////

export declare type RootStackParamList = {
  Home: undefined
  MangaDetails: Anime
  MangaList: NavigatorScreenParams<MangaListDrawerParamList>
  Reader: {
    anime: Anime
    chapter: Chapter
  }
}

export declare type RootTabParamList = {
  Library: undefined
  Browse: undefined
  Settings: undefined
}


////---- Drawer Params Types ----////

export declare type MangaListDrawerParamList = {
  Screen: {
    source: Source
    sort: 'v' | 'vm' | 'lt' | 'y' | 's'
    desc: boolean
  }
}

////---- Screen Params Types ----////

export declare type Screens = {
  name: string
  component: React.FC<any>
  options?: {
    icon?: Icon
  }
}[]

export declare type MangaDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'MangaDetails'
>

export declare type ReaderProps = NativeStackScreenProps<
  RootStackParamList,
  'Reader'
>

export declare type MangaListDrawerProps = DrawerScreenProps<
  MangaListDrawerParamList,
  'Screen'
>
