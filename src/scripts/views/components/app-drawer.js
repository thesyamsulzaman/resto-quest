class AppDrawer extends HTMLElement {
  constructor() {
    super();
    this.nav = document.querySelector('.header-nav-navbar');
    this.main = document.querySelector('#mainContent');
    this.active = false;
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', (e) => this.openDrawer(e));
    this.main.addEventListener('click', (e) => this.closeDrawer(e));
  }

  openDrawer(e) {
    e.stopPropagation();
    this.nav.classList.toggle('header-nav-navbar--show');
    this.render();
  }

  closeDrawer(e) {
    e.stopPropagation();
    this.nav.classList.remove('header-nav-navbar--show');
    this.render();
  }

  isActive() {
    return this.nav.className.includes('header-nav-navbar--show');
  }

  render() {
    this.innerHTML = `
      <a
        href="javascript:void(0);"
        aria-label="Navbar Toggler"      
        class="header-nav-drawer">
        ${
          this.isActive()
            ? '<i class="fas fa-times fa-lg"></i>'
            : '<i class="fas fa-bars fa-lg"></i>'
        }        
      </a>     
    `;
  }
}
window.customElements.define('app-drawer', AppDrawer);
