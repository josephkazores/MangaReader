import { Anime } from '../../../types'
import { LibraryReducerAction } from '../../types'

declare type State = {
  library: Anime[]
}

const INITIAL_STATE: State = {
    library: [],
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
        library: newState
      }
    default:
      return state
  }
}
