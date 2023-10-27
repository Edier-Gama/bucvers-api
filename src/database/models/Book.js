const mongoose = require('mongoose')
const model = mongoose.model
const Schema = mongoose.Schema

const BooksSchema = new Schema({
  title: String,
  content: String,
  cover: String,
  author: String,
  description: String,
  pages: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Book = model('Book', BooksSchema)

module.exports = Book
