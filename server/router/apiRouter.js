const { Router } = require('express')
const GameController = require('../controller/GameController')

const router = Router()
router.use('/game', GameController)

module.exports = router
