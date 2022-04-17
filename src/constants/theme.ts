import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'
import { colors } from 'react-native-elements'

export const DefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...colors,
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#2f426f',
    secondary: '#3699fa',
    tertiary: '#3372b2',
    background: '#fff',
    code: '#f0f0f0',
    blockquote: '#ddd',
    aqua: '#4bfefe',
  },
  icons: {
    size: {
      big: 58,
      small: 35,
    },
  },
}
export const DarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...colors,
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#fff',
    secondary: '#3699fa',
    tertiary: '#3372b2',
    background: '#212121',
    code: '#2a3836',
    blockquote: '#ddd',
    aqua: '#4bfefe',
  },
  icons: {
    size: {
      big: 58,
      small: 35,
    },
  },
}
