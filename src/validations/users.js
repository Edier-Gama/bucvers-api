const { body, validationResult } = require('express-validator')

const validateForm = [
  body('firstName', 'Ingresa un valor valido')
    .exists().isLength(5),
  body('lastName', 'Se espera un lastname')
]

module.exports = { validateForm, validationResult }
