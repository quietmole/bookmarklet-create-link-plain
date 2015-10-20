'use strict';
/**
  * @return {string} plain-text title and url from current page.
  **/
module.exports = function () {
  return window.document.title + ' ' + window.location.href;
};
