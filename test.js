'use strict';
var assert = require('power-assert');
var createLinkPlain = require('./');

it('should ', function () {
  assert.strictEqual(createLinkPlain('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(createLinkPlain('unicorns'), 'unicorns & wrong');
});
