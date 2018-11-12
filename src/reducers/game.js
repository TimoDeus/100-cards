import {DRAW_FROM_DECK, PLAY_CARD, PREPARE_GAME} from '../actions/game'
import {drawFromDeck} from '../utils/cardUtils'

export const game = (state = {}, action) => {
  switch (action.type) {
    case PREPARE_GAME:
      return {...state, ...action.payload}
    case PLAY_CARD:
      return {
        ...state,
        ...{
          [action.payload.stash]: action.payload.card,
          hand: state.hand.filter(e => e !== action.payload.card),
          cardsLeft: state.cardsLeft - 1
        }
      }
    case DRAW_FROM_DECK: {
      const deck = [...state.deck]
      const newCards = drawFromDeck(deck, action.payload.amount)
      return {
        ...state,
        ...{
          hand: [...state.hand, ...newCards].sort(),
          deck: deck,
          deckSize: deck.length
        }
      }
    }
    default:
      return state
  }
}
