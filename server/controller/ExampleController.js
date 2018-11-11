const { Router } = require('express')

const router = Router()

router.get('/example', (req, res) => res.json({ message: 'success' }))

module.exports = router
