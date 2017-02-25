const http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  var buf = '';

  res.on('data', (data) => {
    buf += data;
  })

  res.on('end', () => {
    console.log(buf.length);
    console.log(buf);
  })
})
