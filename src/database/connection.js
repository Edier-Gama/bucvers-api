const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URL

function startDataBase (next) {
  mongoose.connect(connectionString)
    .then(() => {
      console.log('MongoDB connected successfully')
      console.log('Listening on PORT: ' + process.env.PORT)
    })
    .catch((error) => {
      next(error)
    })
}

module.exports = startDataBase
