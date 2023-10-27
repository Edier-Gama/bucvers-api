const User = require('../../../database/models/User')

const returnAllUsers = (req, res) => {
  User.find({})
    .then((usersData) => {
      res.json(usersData)
    })
    .catch((err) => {
      res.send('There is an error: ' + err)
    })
}

module.exports = returnAllUsers
