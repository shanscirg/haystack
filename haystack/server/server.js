const express = require('express')
const cors = require('cors')
const app = express()

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

app.listen(3001, () => {
  console.log('Listening on port 3000')
})
