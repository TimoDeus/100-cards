import { EXAMPLE_FAILURE, EXAMPLE_SUCCESS } from '../actions/basic'

export const example = (state = {}, action) => {
  switch (action.type) {
    case EXAMPLE_SUCCESS:
      return { ...state, ...action.payload }
    case EXAMPLE_FAILURE:
      return {}
    default:
      return state
  }
}
