import React, { createContext, useContext } from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider, Portal } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

import { DarkTheme, DefaultTheme } from '../constants'
import { AppDispatch, RootState } from '../store/types'

declare type ThemeContextTypes = {
  theme?: typeof DarkTheme
  darkMode?: boolean
  toggleDarkMode?: () => any
}

const ThemeContext = createContext<ThemeContextTypes>({})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const {darkMode} = useSelector((state: RootState)=> state.themeReducer)
  const dispatch = useDispatch<AppDispatch>()

  const toggleDarkMode = () => dispatch({type: 'TOGGLE_DARK_MODE'})

  const theme = darkMode ? DarkTheme : DefaultTheme

  return (
    <PaperProvider theme={theme}>
      <Portal>
        <NavigationContainer theme={theme}>
          <ThemeContext.Provider
            value={{
              darkMode,
              toggleDarkMode,
              theme,
            }}>
            <StatusBar
              backgroundColor={theme.colors.background}
              barStyle={theme.dark ? 'light-content' : 'dark-content'}
              hidden={false}
            />
            {children}
          </ThemeContext.Provider>
        </NavigationContainer>
      </Portal>
    </PaperProvider>
  )
}
