import { StyleSheet, ViewStyle } from 'react-native'

interface Styles {
  root: ViewStyle
  container: ViewStyle
}

export default StyleSheet.create<Styles>({
    root: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
})
