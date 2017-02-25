const net = require('net');

function pad(input, size) {
  var num = input + '';
  return ('0'.repeat((size - num.length)) + num);
}

var server = net.createServer(function (socket) {
  var date = new Date();
  var year = date.getFullYear();
  var month = pad(date.getMonth() + 1, 2);
  var day = pad(date.getDate(), 2);
  var hrs = pad(date.getHours(), 2);
  var mins = pad(date.getMinutes(), 2);
  socket.end(year + '-' + month + '-' + day + ' ' + hrs + ':' + mins + "\n");
})
server.listen(process.argv[2]);
