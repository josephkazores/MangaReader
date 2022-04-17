import { ThemeReducerAction } from '../../types'

declare type State = {
  darkMode: boolean
}

const INITIAL_STATE: State = {
  darkMode: true
}

export default (state = INITIAL_STATE, action: ThemeReducerAction) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      }
    default:
      return state
  }
}
