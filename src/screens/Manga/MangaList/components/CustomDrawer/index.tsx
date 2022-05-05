import React, { useEffect, useState } from 'react'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { Filter } from '../../../../../types'
import { DrawerContent } from '../../../../../components/DrawerContent'
import { Sources } from '../../../../../constants'

export const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const {
    state: { routes },
  } = props
  const {
    params: { source },
  } = routes[0]

  const [filter, setFilters] = useState<Filter[]>([
    {
      name: 'Filter',
      content: [
        {
          title: 'Year',
          type: 'input',
        },
        {
          title: 'Author',
          type: 'input',
        },
        {
          title: 'Scan Status',
          type: 'select',
          data: [
            {
              name: 'Ongoing',
              value: 'ongoing',
            },
          ],
          onChangeSelect: () => {},
        },
        {
          title: 'Published Status',
          type: 'select',
          data: [
            {
              name: 'Ongoing',
              value: 'ongoing',
            },
          ],
          onChangeSelect: () => {},
        },
        {
          title: 'Type', 
          type: 'select',
          data: [
            {
              name: 'Manga',
              value: 'manga',
            },
            {
              name: 'Manhwa',
              value: 'manhwa',
            },
            {
              name: 'Manhua',
              value: 'manhua',
            },
          ],
          onChangeSelect: () => {},
        },
      ],
    },
    {
      name: 'Sort',
      type: 'dropdown',
      content: [
        {
          title: 'Most popular (All-time)',
          type: 'button',
          onPress: () => {},
        },
        {
          title: 'Most popular (Monthly)',
          type: 'button',
          onPress: () => {},
        },
        {
          title: 'Alphabetically',
          type: 'button',
          onPress: () => {},
        },
        {
          title: 'Last Read',
          type: 'button',
          onPress: () => {},
        },
        {
          title: 'Last Updated',
          type: 'button',
          onPress: () => {},
        },
        {
          title: 'Unread',
          type: 'button',
          onPress: () => {},
        },
      ],
    },
  ])

  useEffect(() => {
    if(source){
      (async() => {
        try {
          const res = await Sources[source.name as keyof typeof Sources].loadGenres()
          if(res){
            setFilters(prevSate => [
              ...prevSate,
              {
                name: 'Genres',
                type: 'dropdown',
                content: res.map(genre => ({
                  title: genre,
                  type: 'checkbox',
                  value: false,
                })),
              },
            ])
          }
        }catch(error){
          console.error(error)
        }
      })()
    }
  },[source])

  return (
    <DrawerContentScrollView {...props}>
      <DrawerContent filter={filter}/>
    </DrawerContentScrollView>
  )
}
