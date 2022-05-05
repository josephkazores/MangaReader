import React, { createContext, useContext } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider, Portal } from 'react-native-paper'
import { useSelector } from 'react-redux'

import { DarkTheme, DefaultTheme } from '../constants'
import { RootState } from '../store/types'

declare type ThemeContextTypes = {
  theme?: typeof DarkTheme
  darkMode?: boolean
  toggleDarkMode?: () => any
}

const ThemeContext = createContext<ThemeContextTypes>({})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const { darkMode, statusBar } = useSelector(
    (state: RootState) => state.themeReducer,
  )

  const theme = darkMode ? DarkTheme : DefaultTheme

  return (
    <PaperProvider theme={theme}>
      <Portal>
        <NavigationContainer theme={theme}>
          <ThemeContext.Provider
            value={{
              theme,
            }}>
            <StatusBar
              backgroundColor={theme.colors.background}
              barStyle={theme.dark ? 'light-content' : 'dark-content'}
              hidden={statusBar}
            />
            {children}
          </ThemeContext.Provider>
        </NavigationContainer>
      </Portal>
    </PaperProvider>
  )
}
