import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ImageSourcePropType } from 'react-native'

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

export declare type Screens = {
  name: string
  component: React.FC<any>
  options?: {
    icon?: Icon
  }
}[]

export declare type Anime = {
  source: Source
  SeriesId?: number
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
  Chapter?: number
  Type?: string
  Date?: string
  ChapterName?: object[]
}

export declare type RootStackParamList = {
  Home: undefined
  MangaDetails: Anime
  MangaList: {
    source: Source
    sort: 'v' | 'vm' | 'lt' | 'y' | 's'
    desc: boolean
  }
}

export declare type RootTabParamList = {
  Library: undefined
  Browse: undefined
  Settings: undefined
}

export declare type MangaDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'MangaDetails'
>

export declare type MangaListProps = NativeStackScreenProps<
  RootStackParamList,
  'MangaList'
>
