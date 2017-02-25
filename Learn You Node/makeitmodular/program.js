var module = require("./module.js");

module(process.argv[2], process.argv[3], (err, list) => {
  if (err) {
    console.log(err);
    return;
  }

  for (i of list) {
    console.log(i);
  }
})
