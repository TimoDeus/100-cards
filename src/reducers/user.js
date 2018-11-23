import {STORE_USERNAME} from "../actions/user";

export const user = (state = {}, action) => {
  const {payload} = action
  switch (action.type) {
    case STORE_USERNAME:
      return {...state, name: payload}
    default:
      return state
  }
}
