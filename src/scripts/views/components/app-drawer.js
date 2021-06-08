class AppDrawer extends HTMLElement {
  constructor() {
    super();
    this.nav = document.querySelector('.header-nav-navbar');
    this.main = document.querySelector('main');
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', (e) => this.clickEvent(e));
    this.main.addEventListener('click', (e) => this.closeDrawer(e));
  }

  clickEvent(e) {
    e.preventDefault();
    this.nav.classList.toggle('header-nav-navbar--show');
  }

  closeDrawer(e) {
    e.preventDefault();
    this.nav.classList.remove('header-nav-navbar--show');
  }

  render() {
    this.innerHTML = `
      <a
        href="#"
        aria-label="Navbar Toggler"
        class="header-nav-drawer">

        <i class="fas fa-bars fa-lg"></i>
      </a>     
    `;
  }
}
window.customElements.define('app-drawer', AppDrawer);
