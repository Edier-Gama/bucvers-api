const CastError = (error, req, res, next) => {
  if (error.name === 'CastError') {
    res.status(400).json({ error: 'There is no any result for that ID' })
  } else {
    res.status(500).json({ error: 'Internal server error, sorry :(' })
  }
  next()
}
module.exports = CastError
