const CastError = (error, req, res, next) => {
  if (error.name === 'CastError') {
    res.status(400).json({ error: 'There is no any result for that ID' })
  }
  next()
}
module.exports = CastError
