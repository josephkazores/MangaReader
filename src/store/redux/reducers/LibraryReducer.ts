import { Anime } from '../../../types'
import { LibraryReducerAction } from '../../types'

declare type State = {
  library: Anime[]
  preferences: {
    column: number
  }
}

const INITIAL_STATE: State = {
  library: [],
  preferences: {
    column: 3,
  },
}

export default (state = INITIAL_STATE, action: LibraryReducerAction) => {
  switch (action.type) {
    case 'ADD_TO_LIBRARY':
      return {
        ...state,
        library: [...state.library, action.payload],
      }
    case 'REMOVE_TO_LIBRARY':
      const newState = state?.library?.filter(
        anime => anime?.IndexName != action.payload?.IndexName,
      )
      return {
        ...state,
        library: newState,
      }
    case 'UPDATE_PREFERENCES_COLUMN':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          column: action.payload,
        },
      }
    default:
      return state
  }
}
