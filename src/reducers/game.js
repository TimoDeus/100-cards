import { DRAW_FROM_DECK, PLAY_CARD, PREPARE_GAME } from '../actions/game'
import { CARDS_LEFT, DECK, HAND } from '../utils/constants'
import { drawFromDeck } from '../utils/cardUtils'

export const game = (state = {}, action) => {
  switch (action.type) {
    case PREPARE_GAME:
      return { ...state, ...action.payload }
    case PLAY_CARD:
      return {
        ...state,
        ...{
          [action.payload.stash]: action.payload.card,
          [HAND]: state[HAND].filter(e => e !== action.payload.card),
          [CARDS_LEFT]: state[CARDS_LEFT] - 1
        }
      }
    case DRAW_FROM_DECK: {
      const deck = [...state[DECK]]
      const newCards = drawFromDeck(deck, action.payload.amount)
      return {
        ...state,
        ...{
          [HAND]: [...state[HAND], ...newCards].sort(),
          [DECK]: deck
        }
      }
    }
    default:
      return state
  }
}
