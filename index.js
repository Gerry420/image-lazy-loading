function lazy_loading (node) {

  window.addEventListener('load', () => {
    const imageUrl = node.dataset.background;
    const image = new Image();

    image.src = imageUrl;
    clearTimeout(timer);

    image.addEventListener('load', () => {
      const style = 'background-image: url("' + imageUrl + '");';
      node.style = style;
      console.log('image changed');
    });
  });
};

module.exports = lazy_loading;