'use strict';

function attachTitle(name) {
  return 'DR. ' + name;
}

new Promise((fulfill, reject) => {
  fulfill('MANHATTAN');
}).then(attachTitle).then(console.log);
