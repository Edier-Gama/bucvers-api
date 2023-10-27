const User = require('../../../database/models/User')

const updateUser = (req, res, next) => {
  const id = req.params.id
  const newData = req.body

  User.findByIdAndUpdate(id, newData, { new: true })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      next(error)
    })
}

module.exports = updateUser
