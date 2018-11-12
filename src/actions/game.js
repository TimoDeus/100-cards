import axios from 'axios'
import {prepareGameUrl} from "../config/restUrls";

export const PREPARE_GAME = 'PREPARE_GAME'
export const PLAY_CARD = 'PLAY_CARD'
export const DRAW_FROM_DECK = 'DRAW_FROM_DECK'

export const prepareGame = () => dispatch => {
  return axios.get(prepareGameUrl).then(
    ({data}) => dispatch({type: PREPARE_GAME, payload: data}))
}

export const playCard = (card, stash) => dispatch => {
  dispatch({type: PLAY_CARD, payload: {card, stash}})
}

export const drawCards = amount => dispatch => {
  dispatch({type: DRAW_FROM_DECK, payload: {amount}})
}
