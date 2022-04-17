import { StyleSheet, ViewStyle } from 'react-native'

interface Styles {
    title: ViewStyle
}

export default StyleSheet.create<Styles>({
    title: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: '500',
      }
})