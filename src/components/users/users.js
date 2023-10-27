const express = require('express')
const createUser = require('./controllers/createUser')
const returnAllUsers = require('./controllers/returnUsers')
const updateUser = require('./controllers/updateUser')
const findUserByID = require('./controllers/findUser')
const deleteUser = require('./controllers/deleteUser')
const router = express.Router()
const CastError = require('../../middlewares/CastError')
const notFound = require('../../middlewares/notFound')

router.get('/', (req, res) => {
  returnAllUsers(req, res)
})
router.get('/:id', (req, res, next) => {
  findUserByID(req, res, next)
})
router.post('/', (req, res) => {
  const data = req.body
  createUser(req, res, data)
})

router.delete('/:id', (req, res, next) => {
  deleteUser(req, res, next)
})

router.put('/:id', (req, res) => {
  updateUser(req, res)
})

router.use((error, req, res, next) => {
  CastError(error, req, res, next)
})
router.use((request, response, next) => {
  notFound(request, response, next)
})
module.exports = router
