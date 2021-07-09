/* eslint-disable class-methods-use-this */

class FavoriteButton extends HTMLElement {
  constructor() {
    super();
    this.isAdded = false;
    this.isActive = this.getAttribute('init') || 'inactive';
    this._clickEvent = null;
  }

  connectedCallback() {
    if (this.isActive == 'active') {
      this.isAdded = true;
    } else {
      this.isAdded = false;
    }

    this.addEventListener('click', (e) => {
      this._clickEvent(e);
      this.toggleLike();
      this.render();
    });
    this.render();
  }

  set onClickHandler(clickEvent) {
    this._clickEvent = clickEvent;
  }

  toggleLike() {
    this.isAdded = !this.isAdded;
    this.isActive = this.isAdded ? 'active' : '';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['active'];
  }

  render() {
    this.innerHTML = `
			<button 
        aria-label="${
          this.isAdded
            ? 'unlike this restaurant'
            : 'like this restaurant'
        }" 
        id="favoriteButton"
        class="${
          this.isActive === 'active' ? 'active' : ''
        }">              
				${
          this.isAdded
            ? `<i 
                class="fas fa-check-circle fa-lg" 
                style="margin-right: .2em; color: green;">
               </i> Added to favorite`
            : `<i 
                class="fas fa-plus fa-sm" 
                style="margin-right: .2em; color: #fff;">
               </i>
               Add to Favorite`
        }	      
  		</button>
		`;
  }
}

window.customElements.define('favorite-button', FavoriteButton);
