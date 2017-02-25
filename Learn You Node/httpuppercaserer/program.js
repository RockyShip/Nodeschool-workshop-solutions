const http = require('http');
const map = require('through2-map');

var server = http.createServer( (req, res) => {
  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
})

server.listen(process.argv[2]);
