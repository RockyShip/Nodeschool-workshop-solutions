var fs = require("fs");

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) { return callback(err); }

    var result = [];

    for (i of list) {
      if (i.includes("." + ext)) {
        result.push(i);
      }
    }

    callback(null, result);
  })
}
