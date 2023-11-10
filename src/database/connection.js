const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URL

function startDataBase () {
  mongoose.connect(connectionString)
    .then(() => {
      console.log('Connection success')
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = startDataBase
