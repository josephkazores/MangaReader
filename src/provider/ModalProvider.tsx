import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Modal, { ModalProps } from 'react-native-modal'
import { useTheme } from './ThemeProvider'

declare type ModalContextTypes = {
  toggleModal?: () => void
}

export const ModalContext = createContext<ModalContextTypes>({})

export const ModalProvider: React.FC<{
  modalContent?: ReactNode
  modalProps?: ModalProps
}> = ({ children, modalContent, modalProps }) => {
  const { theme } = useTheme()
  const [visibility, setVisibility] = useState(false)

  const toggleModal = () => setVisibility(prevState => !prevState)

  return (
    <ModalContext.Provider
      value={{
        toggleModal,
      }}>
      <Modal
        isVisible={visibility}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        style={{ margin: 0, justifyContent: 'flex-end' }}
        {...modalProps}>
        <View
          style={{
            backgroundColor: theme?.colors.background,
            height: Dimensions.get('screen').height / 2 + 50,
            borderRadius: 20,
          }}>
          <View
            style={{
              borderBottomColor: theme?.colors.border,
              borderBottomWidth: 1,
              height: 40,
            }}>
            <Icon
              name="remove-outline"
              type="ionicon"
              tvParallaxProperties
              color={theme?.colors.disabled}
              size={50}
              onPress={toggleModal}
              style={{ marginTop: -5 }}
            />
          </View>
          {modalContent}
        </View>
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
