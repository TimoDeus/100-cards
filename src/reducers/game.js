import {DRAW_FROM_DECK, PLAY_CARD, PREPARE_GAME, START_GAME} from '../actions/game'

export const game = (state = {}, action) => {
  const {payload} = action
  switch (action.type) {
    case PREPARE_GAME:
      return {...state, ...payload}
    case START_GAME:
      return {...state, ...payload}
    case PLAY_CARD:
      return {
        ...state,
        ...{
          [payload.stash]: payload.card,
          hand: state.hand.filter(e => e !== payload.card),
          cardsLeft: state.cardsLeft - 1
        }
      }
    case DRAW_FROM_DECK: {
      const {cards, deckSize} = payload
      return {
        ...state,
        ...{
          hand: [...state.hand, ...cards],
          deckSize
        }
      }
    }
    default:
      return state
  }
}
