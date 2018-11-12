import {drawFromDeck, getInitialDeck} from '../utils/cardUtils'
import uuid from 'uuid/v4'

export const PREPARE_GAME = 'PREPARE_GAME'
export const PLAY_CARD = 'PLAY_CARD'
export const DRAW_FROM_DECK = 'DRAW_FROM_DECK'

export const prepareGame = () => dispatch => {
  const deck = getInitialDeck()
  const hand = drawFromDeck(deck, 7).sort()
  return dispatch({
    type: PREPARE_GAME,
    payload: {
      id: uuid(),
      upA: 1,
      upB: 1,
      downA: 100,
      downB: 100,
      cardsLeft: 98,
      deckSize: deck.length,
      deck,
      hand
    }
  })
}

export const playCard = (card, stash) => dispatch => {
  dispatch({ type: PLAY_CARD, payload: { card, stash } })
}

export const drawCards = amount => dispatch => {
  dispatch({ type: DRAW_FROM_DECK, payload: { amount } })
}
