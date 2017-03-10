'use strict';

function parsePromised() {
  var promise = new Promise((fulfill, reject) => {
    try {
      let obj = JSON.parse(process.argv[2]);
      fulfill(obj);
    } catch (e) {
      reject(e);
    }
  });
  return promise;
}

parsePromised().catch(console.log);
