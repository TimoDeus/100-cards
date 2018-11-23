import {CREATE_ROOM_SUCCESS, ADD_PLAYER, REMOVE_PLAYER} from "../actions/room";

export const room = (state = {}, action) => {
  const {payload} = action
  switch (action.type) {
    case CREATE_ROOM_SUCCESS:
      return {...state, id: payload}
    case ADD_PLAYER:
      return {...state, players: [...state.players, payload]}
    case REMOVE_PLAYER:
      return {...state, players: state.players.filter(p => p.id !== payload)}
    default:
      return state
  }
}
