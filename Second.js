
const http = require('http');
const server = http.createServer((req, res) => {
  const yourName = "Arjun Dwivedi";
  res.end(yourName);
});

server.listen(4000);
