const {drawFromDeck, getInitialDeck} = require('../utils/cardUtils')
const uuid = require('uuid/v4')
const {Router} = require('express')

const router = Router()

router.get('/prepare', (req, res) => {
  const deck = getInitialDeck()
  const hand = drawFromDeck(deck, 7).sort()
  const data = {
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
  res.json(data)
})

module.exports = router
