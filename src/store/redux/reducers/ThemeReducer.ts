import { ThemeReducerAction } from '../../types'

declare type State = {
  darkMode: boolean
  statusBar: boolean
}

const INITIAL_STATE: State = {
  darkMode: true,
  statusBar: false,
}

export default (state = INITIAL_STATE, action: ThemeReducerAction) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      }
    case 'SHOW_STATUS_BAR':
      return {
        ...state,
        statusBar: false,
      }
    case 'HIDE_STATUS_BAR':
      return {
        ...state,
        statusBar: true,
      }
    case 'TOGGLE_STATUS_BAR':
      return {
        ...state,
        statusBar: !state.statusBar,
      }
    default:
      return state
  }
}
