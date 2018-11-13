const {prepareGameHandler, drawCardsHandler, playCardHandler, startHandler} = require('../facade/GameFacade');
const {Router} = require('express')

const router = Router()

router.post('/prepare', prepareGameHandler)
router.post('/start', startHandler)
router.post('/drawCards', drawCardsHandler)
router.post('/playCard', playCardHandler)

module.exports = router
