const express = require('express')
const createUser = require('./controllers/createBooks')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Ruta get users working')
})
router.post('/', (req, res) => {
  const data = req.body
  createUser(res, data)
})
module.exports = router
