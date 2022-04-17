import { Anime, Source } from '../types'
import { store } from './index'

export declare type RootState = ReturnType<typeof store.getState>
export declare type AppDispatch = typeof store.dispatch

export declare type ThemeReducerAction = {
  payload: boolean
  type: 'TOGGLE_DARK_MODE'
}

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
