const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(express.static('public'))

app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
