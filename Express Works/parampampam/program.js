const express = require('express');
const crypto = require('crypto');

var app = express();

app.put('/message/:id', (req, res) => {
  var out = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');
  res.send(out);
})

app.listen(process.argv[2]);
