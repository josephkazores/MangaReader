import React from 'react'
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Checkbox, RadioButton, Text } from 'react-native-paper'
import { useTheme } from '../../provider'
import { Filter } from '../../types'

interface Props {
  filter: Filter[]
}

export const DrawerContent: React.FC<Props> = ({ filter }) => {
  const {theme} = useTheme()
  return (
    <FlatList
      data={filter}
      style={{ marginBottom: 20 }}
      renderItem={({ item: { name, content }, index }) => (
        <View
          key={index + ''}
          style={{ marginBottom: 10, paddingHorizontal: 15 }}>
          <Text style={{ fontWeight: '700', fontSize: 16 }}>{name}</Text>
          {content.map(({ title, type, ...rest }) => {
            const { value, onPress } = rest
            switch (type) {
              case 'input':
                return (
                  <TextInput
                    placeholder={title}
                    placeholderTextColor={theme?.colors.primary}
                    style={{
                      borderBottomColor: theme?.colors.primary,
                      borderBottomWidth: 2,
                      padding: 5,
                      paddingVertical: 10,
                      marginBottom: 10,
                    }}
                  />
                )
              case 'button':
                return (
                  <TouchableOpacity
                    onPress={onPress}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 15,
                    }}>
                    <Icon
                      name="md-arrow-up"
                      type="ionicon"
                      color={theme?.colors.secondary}
                      tvParallaxProperties
                    />
                    <Text style={{ marginLeft: 5 }}>{title}</Text>
                  </TouchableOpacity>
                )
              case 'radio':
                return (
                  <TouchableOpacity
                    onPress={onPress}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <View>
                      {value ? (
                        <Icon
                          name="radiobox-marked"
                          type="material-community"
                          color={theme?.colors.secondary}
                          tvParallaxProperties
                        />
                      ) : (
                        <Icon
                          name="radiobox-blank"
                          type="material-community"
                          color={theme?.colors.secondary}
                          tvParallaxProperties
                        />
                      )}
                      <Text style={{ marginLeft: 5 }}>{title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              case 'checkbox':
                return (
                  <TouchableOpacity
                    onPress={onPress}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 15,
                    }}>
                    {value ? (
                      <Icon
                        name="checkbox-marked-outline"
                        type="material-community"
                        color={theme?.colors.secondary}
                        tvParallaxProperties
                      />
                    ) : (
                      <Icon
                        name="checkbox-blank-outline"
                        type="material-community"
                        color={theme?.colors.secondary}
                        tvParallaxProperties
                      />
                    )}
                    <Text style={{ marginLeft: 5 }}>{title}</Text>
                  </TouchableOpacity>
                )
              default:
                return <></>
            }
          })}
        </View>
      )}
    />
  )
}
