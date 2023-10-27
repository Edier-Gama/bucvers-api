const usersRouter = require('../components/users/users')
const booksRouter = require('../components/books/books')

const routes = function (app) {
  app.use('/api/users', usersRouter)
  app.use('/api/books', booksRouter)
}

module.exports = routes
