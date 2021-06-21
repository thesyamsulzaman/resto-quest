const PageLoader = {
  show() {
    document.querySelector(
      '.containerWithLoader'
    ).innerHTML = `<loading-page></loading-page>`;
  },

  hide() {
    document.querySelector('.containerWithLoader').innerHTML = ``;
  },
};

export default PageLoader;
