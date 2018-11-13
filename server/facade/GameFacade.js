const {createNewGame, getGameDataForPlayer} = require('../utils/gameUtils')

const storage = {}

const prepareGameHandler = (req, res) => {
  const {id} = createNewGame()
  res.json({id})
}

const startHandler = (req, res) => {
  const {body: {gameId, playerId}} = req
  const data = getGameDataForPlayer(gameId, playerId)
  res.json(data)
}

const playCardHandler = (req, res) => {
  // TODO add logic
}

const drawCardsHandler = (req, res) => {
  const {body: {gameId, amount}} = req
  const deck = storage[gameId].deck
  const cards = drawFromDeck(deck, amount);
  res.json({deckSize: deck.length, cards})
}

module.exports = {
  prepareGameHandler,
  drawCardsHandler,
  playCardHandler,
  startHandler
}
