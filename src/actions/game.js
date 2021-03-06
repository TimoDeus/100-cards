import {socket} from '../utils/socketUtils';

export const PREPARE_GAME = 'PREPARE_GAME'
export const START_GAME = 'START_GAME'
export const PLAY_CARD = 'PLAY_CARD'
export const DRAW_FROM_DECK = 'DRAW_FROM_DECK'


export const prepareGame = () => (dispatch) => {
  socket.on('prepareGame', data => {
    dispatch({type: PREPARE_GAME, payload: data})
  })
}

// export const startGame = (gameId, playerId) => dispatch => {
//   const data = {gameId, playerId}
//   return axios.post(startGameUrl, data).then(
//     ({data}) => dispatch({type: START_GAME, payload: data}))
// }
//
// export const playCard = (card, stashId, playerId = DEFAULT_PLAYER_ID) => dispatch => {
//   const data = {playerId, card, stashId}
//   return axios.post(playCardUrl, data).then(
//     ({data}) => dispatch({type: PLAY_CARD, payload: data}))
// }
//
// export const drawCards = amount => (dispatch, getState) => {
//   const data = {amount, gameId: getState().game.id}
//   return axios.post(drawCardsUrl, data).then(
//     ({data}) => dispatch({type: DRAW_FROM_DECK, payload: data}))
// }
