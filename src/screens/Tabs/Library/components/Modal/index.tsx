import React from 'react'
import { TopTabs } from '../../../../../components'
import { Display, Filter, Sort } from './components'

interface Props {}

export const Modal: React.FC<Props> = () => {
  return (
    <TopTabs
      screens={[
        {
          component: Filter,
          name: 'Filter',
        },
        {
          component: Sort,
          name: 'Sort',
        },
        {
          component: Display,
          name: 'Display',
        },
      ]}
    />
  )
}
