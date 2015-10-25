'use strict';
var assert = require('power-assert');
var browserSelectedText = require('./');

it('should be title', function () {
  assert(browserSelectedText() === 'Current page title');
});
