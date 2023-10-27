const Book = require('../../../database/models/Book')

const createUser = (res, data) => {
  try {
    if (data) {
      const newBook = new Book({
        title: data.title,
        content: data.content,
        cover: data.cover,
        author: data.author,
        description: data.description,
        pages: data.pages
      })

      newBook.save()
        .then(() => {
          res.status(200).send('new user created')
        })
        .catch((err) => {
          res.status(400).send('There was an error creating this user' + err)
        })
    }
  } catch (error) {
    console.error('There was an error creating this book', +error)
  }
}

module.exports = createUser
