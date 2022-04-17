import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//routes
import { stack } from '../routes'

//screens
import { SplashScreen } from '../../screens'

const Stack = createStackNavigator()

export const StackNavigation = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
  }, [])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <Stack.Navigator>
      {stack.map(({ name, options, ...rest }) => (
        <Stack.Screen
          key={name}
          name={name}
          options={{
            headerShown: false,
            ...options,
          }}
          {...rest}
        />
      ))}
    </Stack.Navigator>
  )
}
