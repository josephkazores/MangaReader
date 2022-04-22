import { Anime, Source } from '../types'
import { store } from './index'

export declare type RootState = ReturnType<typeof store.getState>
export declare type AppDispatch = typeof store.dispatch

export declare type ThemeReducerAction =
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SHOW_STATUS_BAR' }
  | { type: 'HIDE_STATUS_BAR' }
  | { type: 'TOGGLE_STATUS_BAR' }

export declare type SourcesReducerAction =
  | {
      payload: Source
      type: 'ADD_PINNED_SOURCE'
    }
  | {
      payload: Source
      type: 'REMOVE_PINNED_SOUCE'
    }

export declare type LibraryReducerAction =
  | {
      payload: Anime
      type: 'ADD_TO_LIBRARY'
    }
  | {
      payload: Anime
      type: 'REMOVE_TO_LIBRARY'
    }
  | {
      payload: number
      type: 'UPDATE_PREFERENCES_COLUMN'
    }
