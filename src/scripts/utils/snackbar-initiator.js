const SnackBarMessage = {
  init({ type, messageText }) {
    const element = document.querySelector('snackbar-message');
    element.message = {
      type,
      messageText,
    };
  },
};

export default SnackBarMessage;
