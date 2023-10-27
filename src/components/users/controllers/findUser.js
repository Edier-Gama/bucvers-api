const User = require('../../../database/models/User')

const findUserByID = (req, res, next) => {
  const id = req.params.id

  try {
    User.findById(id)
      .then((result) => {
        res.json(result)
      })
      .catch((error) => {
        next(error)
      })
  } catch (error) {
    next(error)
  }
}

module.exports = findUserByID
