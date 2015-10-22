'use strict';
var assert = require('power-assert');
var browserSelectedTextOrTitle = require('./');

it('should be title', function () {
  assert(browserSelectedTextOrTitle() === 'Current page title');
});
