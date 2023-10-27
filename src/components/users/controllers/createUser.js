const User = require('../../../database/models/User')
const bcrypt = require('bcrypt')

const createUser = async (req, res, data) => {
  try {
    const passwordHash = await bcrypt.hash(data.password, 10)
    if (data) {
      const myNewUser = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        password: passwordHash
      })
      myNewUser.save()
        .then((user) => {
          res.status(200).json(user)
        })
        .catch((err) => {
          res.status(400).send('There was an error creating this user' + err)
        })
    }
  } catch (error) {
    console.error('There was an error creating this user')
  }
}

module.exports = createUser
