const http = require('http');
const fs = require('fs');

var server = http.createServer( (req, res) => {
  var stream = fs.createReadStream(process.argv[3]);
  stream.pipe(res);
})

server.listen(process.argv[2]);
