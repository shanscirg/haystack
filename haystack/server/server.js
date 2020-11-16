const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

const router = require('./routes/index');

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
