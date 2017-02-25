const express = require('express');
const stylus = require('stylus');

var app = express();
app.use(express.static(process.argv[3]));
app.use(stylus.middleware(process.argv[3]));

app.listen(process.argv[2]);
