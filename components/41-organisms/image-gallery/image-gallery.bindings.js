/**
 * @file
 * Javascript binding of baguettebox.min.js.
 */
'use strict';

(function () {

  if (!baguetteBox) { // eslint-disable-line no-undef
    return;
  }
  baguetteBox.run('.image-gallery', { // eslint-disable-line no-undef
    filter: /.*/i,
    async: true,
    captions: function (element) {
      var figcaption = element.querySelector('figcaption');
      return figcaption ? figcaption.innerText : null;
    }
  });

})();