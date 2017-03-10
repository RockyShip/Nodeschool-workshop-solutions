'use strict';

var firstPromise = first();

var secondPromise = firstPromise.then((fulfillment) => {
  return second(fulfillment);
});

secondPromise.then(console.log);
