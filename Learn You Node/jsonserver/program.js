const http = require('http');
const url = require('url');

var server = http.createServer( (req, res) => {
  if (req.method === 'GET') {
    var parsed = url.parse(req.url, true);
    var query = parsed.query.iso;
    console.log(query);
    var out;

    if (parsed.pathname === '/api/parsetime') {
      var hour = parseInt(query.slice(11, 13));
      var minute = parseInt(query.slice(14, 16));
      var second = parseInt(query.slice(17, 19));

      var out = {
        "hour": hour,
        "minute": minute,
        "second": second
      }
    } else if (parsed.pathname === '/api/unixtime') {
      var out = { "unixtime": Date.parse(parsed.query.iso) }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(out));
    res.end();
  }
})

server.listen(process.argv[2]);
