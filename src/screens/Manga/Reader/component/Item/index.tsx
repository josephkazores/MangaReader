import React, { useEffect, useState } from 'react'
import { Dimensions, GestureResponderEvent, Image, TouchableWithoutFeedback, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Text } from 'react-native-paper'
import { useTheme } from '../../../../../provider'

interface Props {
  uri: string
  onPress?: ((event: GestureResponderEvent) => void)
}

export const Item: React.FC<Props> = ({ uri, onPress }) => {
  const [ratio, setRatio] = useState(0)
  const [loading, setLoading] = useState(true)
    const {theme} = useTheme()

  useEffect(() => {
    if (uri) {
      ;(async () => {
        await Image.getSize(uri, (w, h) => {
          setRatio(w / h)
        })
      })()
    }
  }, [uri])

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        {loading && ratio == 0 && (
          <Icon
            name="progress-download"
            type="material-community"
            size={30}
            color={theme?.colors.secondary}
            style={{
              marginVertical: 30,
              alignSelf: 'center',
            }}
            tvParallaxProperties
          />
        )}
        {ratio != 0 && (
          <Image
            source={{ uri }}
            resizeMode="contain"
            style={{
              height: Dimensions.get('screen').width / ratio,
              width: Dimensions.get('screen').width,
              alignItems: 'center',
            }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => {
              setLoading(false)
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}
