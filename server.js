const http = require("http");

const port = 3000;

const server = http.createServer((_req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Node.js');
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});