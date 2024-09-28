const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('oioi')
  }
  if (req.url === '/sobre') {
    res.end('tchau')
  }
  res.end('teste teste')
})

server.listen(7000)
