const notFound = (request, response, next) => {
  response.status(404).send('No hemos encontrado esa ruta')
  next()
}

module.exports = notFound
