import { MangaSeeLogo } from '../../../assets'
import { Source } from '../../../types'
import { SourcesReducerAction } from '../../types'

declare type State = {
  pinned: Source[]
  all: Source[]
}

const INITIAL_STATE: State = {
  pinned: [],
  all: [
    {
      id: 1,
      name: 'Mangasee',
      language: 'en',
      logo: MangaSeeLogo,
    },
  ],
}

export default (state = INITIAL_STATE, action: SourcesReducerAction) => {
  switch (action.type) {
    case 'ADD_PINNED_SOURCE':
      return {
        ...state,
        pinned: [...(state.pinned || []), action.payload],
      }
    case 'REMOVE_PINNED_SOUCE':
      const newState = state?.pinned?.filter(
        source => source?.id != action.payload?.id,
      )
      return {
        ...state,
        pinned: newState,
      }
    default:
      return state
  }
}
