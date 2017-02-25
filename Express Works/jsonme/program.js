const express = require('express');
const fs = require('fs');

var app = express();
var book = process.argv[3];

app.get('/books', (req, res) => {
  fs.readFile(book, (err, data) => {
    if (err) throw err;
    var object = JSON.parse(data);
    res.json(object);
  })
})

app.listen(process.argv[2]);
