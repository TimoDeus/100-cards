const { Router } = require('express')
const BaseController = require('../controller/ExampleController')

const router = Router()
router.use('/', BaseController)

module.exports = router
