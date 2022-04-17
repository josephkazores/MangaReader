import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Styles {
  root: ViewStyle
  lac: ViewStyle
  rac: ViewStyle
  title: TextStyle
}

export default StyleSheet.create<Styles>({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    height: 60,
    marginTop: 35
  },
  lac: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rac: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
  },
})
