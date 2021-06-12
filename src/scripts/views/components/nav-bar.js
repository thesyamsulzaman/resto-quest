class NavBar extends HTMLElement {
  constructor() {
    super();
    this.header = document.getElementById('header');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header id="header">
        <nav class="header-nav container">
          <a href="/" class="header-nav-logo">RestoQuest</a>

          <app-drawer></app-drawer>

          <div class="header-nav-navbar">
            <ul class="header-nav-links">

              <li class="header-nav-link">
                <a href="#">Home</a>
              </li>
              <li class="header-nav-link">
                <a href="#/restaurants">Restaurants</a>
              </li>
              <li class="header-nav-link">
                <a href="#/favorites">Favorite</a>
              </li>
              
              <li class="header-nav-link">
                <a href="https://github.com/thesyamsulzaman">
                  About Us
                </a>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    `;
  }
}
window.customElements.define('nav-bar', NavBar);
