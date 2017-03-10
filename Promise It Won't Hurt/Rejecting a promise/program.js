'use strict';

var promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    let err = new Error('REJECTED!');
    reject(err);
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise.then(null, (error) => {
  onReject(error);
});
