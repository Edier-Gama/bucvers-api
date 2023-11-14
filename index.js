const express = require('express')
require('dotenv').config()
const routes = require('./src/routes/router')
const startDataBase = require('./src/database/connection')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res, next) => {
  console.log('Listening on PORT :' + PORT)
  res.send('Estoy vivo y escuchando en el puerto ' + PORT)
})

app.use(express.json())
app.use(cors())
routes(app)
startDataBase()
app.listen(PORT)
