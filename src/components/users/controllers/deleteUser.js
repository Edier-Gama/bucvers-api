const User = require('../../../database/models/User')

const deleteUser = (req, res, next) => {
  const id = req.params.id
  User.findByIdAndRemove(id)
    .then(() => {
      res.status(200).send('User deleted successfully')
    })
    .catch((error) => {
      next(error)
    })
}

module.exports = deleteUser
