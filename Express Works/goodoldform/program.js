const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
  var out = req.body.str.split('').reverse().join('');
  res.send(out);
  res.end();
});

app.listen(process.argv[2]);
