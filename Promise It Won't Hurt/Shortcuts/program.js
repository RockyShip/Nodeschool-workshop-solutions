'use strict';

var promise = Promise.resolve('We did it!');

var promise2 = Promise.reject('We didn\'t do it. :(');

promise2.catch(console.log);
