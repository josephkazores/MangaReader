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
    paddingTop: 50,
    marginBottom: 9
  },
  lac: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  rac: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 2,
  },
  title: {
    fontSize: 20,
    paddingVertical: 2,
  },
})
