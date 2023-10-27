const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const UsersSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

UsersSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.passwordHash
  }
})
const User = model('User', UsersSchema)

module.exports = User
