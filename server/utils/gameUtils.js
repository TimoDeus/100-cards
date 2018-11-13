const uuid = require('uuid/v4')
const {drawFromDeck, getInitialDeck} = require('./cardUtils')

const storage = {}

const initalGame = {
  stashes: [
    {name: 'upA', value: 1, isUpwards: true},
    {name: 'upB', value: 1, isUpwards: true},
    {name: 'downA', value: 100, isUpwards: false},
    {name: 'downB', value: 100, isUpwards: false}
  ],
  cardsLeft: 98
}

const createNewGame = (playerCount = 1) => {
  const deck = getInitialDeck()
  const gameId = uuid()
  const game = {...initalGame}
  game.id = gameId
  game.hands = {}
  const cardsPerPlayer = playerCount > 2 ? 6 : 7
  for (let i = 0; i < playerCount; i++) {
    // TODO replace i with real playerId
    game.hands[i] = drawFromDeck(deck, cardsPerPlayer)
  }
  game.deckSize = deck.length
  storage[gameId] = game
  console.log('created game', game)
  return game
}

const getGameById = id => storage[id]

const getGameDataForPlayer = (gameId, playerId) => {
  const game = getGameById(gameId)
  return {
    stashes: game.stashes,
    hand: game.hands[playerId],
    cardsLeft: game.cardsLeft,
    deckSize: game.deckSize
  }
}

module.exports = {
  createNewGame,
  getGameDataForPlayer
}
