'use strict';
var assert = require('power-assert');
var browserTitleOrSelection = require('./');

it('should be title', function () {
  assert(browserTitleOrSelection() === 'Current page title');
});
