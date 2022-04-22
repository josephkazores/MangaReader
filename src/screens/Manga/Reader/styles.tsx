import { StyleSheet, ViewStyle } from 'react-native'

interface Styles {
    headerStyle: ViewStyle
}

export default StyleSheet.create<Styles>({
    headerStyle: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
      }
})