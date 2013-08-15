var assert = require('assert');

var diff = require('./')

assert.deepEqual(diff([1, 2, 3], [2, 3]), [1])

assert.deepEqual(diff([1, 2, 3], [1, 2, 3]), [])

assert.deepEqual(diff([1, 2], [1, 2, 3]), [])
