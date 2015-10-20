'use strict';
var assert = require('power-assert');
var linkPlain = require('../');
var startsWith = require('lodash.startswith');

it('should be title and url', function () {
  assert(startsWith(linkPlain(), 'General http://localhost:'));
});
