require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const apiRouter = require('./router/apiRouter')
const cors = require('cors')

const PORT = process.env.REACT_APP_BACKEND_PORT || 3001

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log('Backend listening on port ' + PORT)
})
