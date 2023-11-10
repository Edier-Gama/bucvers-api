const User = require('../../../database/models/User')
const bcrypt = require('bcrypt')

const createUser = async (req, res, data) => {
  try {
    const passwordHash = await bcrypt.hash(data.password, 10)

    const myNewUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password: passwordHash
    })
    myNewUser.save()
      .then((user) => {
        const userCreatedJSON = {
          message: 'User created successfully',
          status: 200,
          userData: user
        }
        res.status(200).json(userCreatedJSON)
      })
      .catch((err) => {
        const failedUserJSON = {
          message: 'Your email is already in use',
          status: 400,
          errorInfo: err
        }
        res.status(400).json(failedUserJSON)
        console.log(err)
      })
  } catch (error) {
    console.error(error)
  }
}

module.exports = createUser
