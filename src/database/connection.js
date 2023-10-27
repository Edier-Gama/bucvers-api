const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URL

function startDataBase (next) {
  mongoose.connect(connectionString)
    .then(() => {
      console.log('Todo ha ido bien')
    })
    .catch((error) => {
      next(error)
    })
}

module.exports = startDataBase
