'use strict';
var compact = require('lodash.compact');
/**
  * @return {string} plain-text title and url from current page.
  **/
module.exports = function () {
  return compact([window.document.title, window.location.href]).join(' ');
};
