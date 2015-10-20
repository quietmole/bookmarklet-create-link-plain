'use strict';
var assert = require('power-assert');
var browserTitleOrSelection = require('./');
var startsWith = require('lodash.startswith');

it('should be title and url', function () {
  assert(startsWith(browserTitleOrSelection(), 'Test\'em http://localhost:'));
});
