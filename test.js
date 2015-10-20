'use strict';
var assert = require('power-assert');
var browserTitleOrSelection = require('./');

it('should be title and url', function () {
  assert(browserTitleOrSelection() === 'Test\'em');
});
