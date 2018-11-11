import { drawFromDeck, getInitialDeck } from '../utils/cardUtils'
import { CARDS_LEFT, DECK, DOWNWARDS_A, DOWNWARDS_B, HAND, UPWARDS_A, UPWARDS_B } from '../utils/constants'

export const PREPARE_GAME = 'PREPARE_GAME'
export const PLAY_CARD = 'PLAY_CARD'
export const DRAW_FROM_DECK = 'DRAW_FROM_DECK'

export const prepareGame = () => dispatch => {
  const deck = getInitialDeck()
  const hand = drawFromDeck(deck, 7).sort()
  return dispatch({
    type: PREPARE_GAME,
    payload: {
      [DECK]: deck,
      [HAND]: hand,
      [UPWARDS_A]: 1,
      [UPWARDS_B]: 1,
      [DOWNWARDS_A]: 100,
      [DOWNWARDS_B]: 100,
      [CARDS_LEFT]: 98
    }
  })
}

export const playCard = (card, stash) => dispatch => {
  dispatch({ type: PLAY_CARD, payload: { card, stash } })
}

export const drawCards = amount => dispatch => {
  dispatch({ type: DRAW_FROM_DECK, payload: { amount } })
}
