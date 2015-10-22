'use strict';
/**
  * @return {string} selected text or plain-text title from current page.
  **/
module.exports = function () {
  var selected = ('getSelection' in window ? window : document).getSelection().toString();
  var title = window.document.title;
  if (selected) {
    return selected;
  }
  return title;
};
