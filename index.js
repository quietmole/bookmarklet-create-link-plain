'use strict';
/**
  * @return {?String} selected text.
  **/
module.exports = function () {
  var selected = '';
  if (window.getSelection) {
    selected = window.getSelection().toString();
  } else if (document.getSelection) {
    selected = document.getSelection().toString();
  } else if (document.selection) {
    selected = document.selection.createRange().text;
  } else {
    return null;
  }
  return selected;
};
