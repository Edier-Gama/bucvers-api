const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const UsersSchema = new Schema({
  id: String,
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

UsersSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.passwordHash
  }
})
const User = model('User', UsersSchema)

module.exports = User
