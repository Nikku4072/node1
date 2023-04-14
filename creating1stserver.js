const http = require('http');

const server = http.createServer((req, res) => {
  console.log('My name is Nikku Meena');
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
