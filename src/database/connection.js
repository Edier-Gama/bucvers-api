const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URL

function startDataBase () {
  mongoose.connect(connectionString)
    .then(() => {
      console.log('MongoDB connected successfully')
      console.log('Listening on PORT: ' + process.env.PORT)
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = startDataBase
