import { combineReducers } from 'redux'
import { game } from './game'
import { user } from './user'
import { room } from './room'

const combinedReducers = combineReducers({
  game,
  user,
  room
})

export default combinedReducers
