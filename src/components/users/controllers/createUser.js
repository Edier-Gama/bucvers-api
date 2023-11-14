const User = require('../../../database/models/User')
const bcrypt = require('bcrypt')

const createUser = async (req, res, data) => {
  try {
    const passwordHash = await bcrypt.hash(data.password, 10)
    if (data) {
      const myNewUser = new User({
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        email: data.email,
        password: passwordHash
      })
      myNewUser.save()
        .then(() => {
          const userJsonResult = {
            message: 'user created successfully',
            status: 200,
            userData: myNewUser
          }
          res.status(200).json(userJsonResult)
        })
        .catch((err) => {
          const badRequestResult = {
            message: 'Your email is already in use, try other',
            status: 400,
            error: err
          }
          res.status(400).json(badRequestResult)
          console.log(err)
        })
    }
  } catch (error) {
    console.error('There was an error creating this user')
  }
}

module.exports = createUser
