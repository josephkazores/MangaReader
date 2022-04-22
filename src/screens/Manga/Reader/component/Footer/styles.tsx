import { Dimensions, StyleSheet, ViewStyle } from 'react-native'

interface Styles {
  footer: ViewStyle
}

export default StyleSheet.create<Styles>({
  footer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    width: Dimensions.get('screen').width,
    paddingTop: 15,
    paddingBottom: 40,
  },
})
