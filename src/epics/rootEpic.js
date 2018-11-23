import {combineEpics} from 'redux-observable'
import roomEpics from './roomEpics'

export const rootEpic = combineEpics(roomEpics)
