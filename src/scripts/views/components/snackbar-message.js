class SnackBarMessage extends HTMLElement {
  constructor() {
    super();
    this.messageConfig = {
      success: {
        iconName: 'fas fa-check-circle fa-lg',
        color: 'green',
        messageText: '',
      },
      failed: {
        iconName: 'fas fa-exclamation-circle fa-lg',
        color: 'red',
        messageText: '',
      },
    };
  }

  set message({ type, messageText }) {
    this.type = type;
    this.messageConfig[type].messageText = messageText;
    this.show();
  }

  close() {
    setTimeout(() => {
      this.querySelector('#snackbar').classList.remove('show');
    }, 1000);
  }

  show() {
    this.render(this.type);
    this.close();
  }

  render(type = 'success') {
    this.innerHTML = `
      <div id="snackbar" class="show">
        <i 
          class="${this.messageConfig[type].iconName}" 
          style="margin-right: .2em; color: ${this.messageConfig[type].color};">
        </i> 
        <span>
          ${this.messageConfig[type].messageText}
        </span>
      </div>
    `;
  }
}

window.customElements.define('snackbar-message', SnackBarMessage);
