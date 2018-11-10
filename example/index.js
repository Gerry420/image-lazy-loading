const lazyLoading = require('../index');

(() => {
  const container = document.getElementsByClassName('container')[0];

  lazyLoading(container);
})();