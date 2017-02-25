const http = require('http');

function juggAsync(url1, url2, url3) {
  var arr = [];

  http.get(url1, (res) => {
    res.setEncoding('utf8');
    var buf = '';

    res.on('data', (data) => {
      buf += data;
      arr[0] = buf;
    })

    res.on('end', () => {
      if (arr.length === 3) {
        for (i of arr) {
          console.log(i)
        }
      }
    })
  })

  http.get(url2, (res) => {
    res.setEncoding('utf8');
    var buf = '';

    res.on('data', (data) => {
      buf += data;
      arr[1] = buf;
    })

    res.on('end', () => {
      if (arr.length === 3) {
        for (i of arr) {
          console.log(i)
        }
      }
    })
  })

  http.get(url3, (res) => {
    res.setEncoding('utf8');
    var buf = '';

    res.on('data', (data) => {
      buf += data;
      arr[2] = buf;
    })

    res.on('end', () => {
      if (arr.length === 3) {
        for (i of arr) {
          console.log(i)
        }
      }
    })
  })
}

juggAsync(process.argv[2], process.argv[3], process.argv[4]);
