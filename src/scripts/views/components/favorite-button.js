/* eslint-disable class-methods-use-this */
import FavoriteModel from '../../models/favorite';

class FavoriteButton extends HTMLElement {
  constructor() {
    super();
    this.isAdded = false;
    this._movie = null;
    this.className = this.getAttribute('class') || '';
    this.addEventListener('click', (e) => this.clickEvent(e));
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.renderButton();
  }

  async toggleLike() {
    await this.renderData();
    await this.renderButton();
  }

  async renderData() {
    const { id } = this._restaurant;
    if (await this.restaurantExists(id)) {
      await FavoriteModel.deleteRestaurant(this._restaurant.id);
    } else {
      await FavoriteModel.putRestaurant(this._restaurant);
    }
  }

  async clickEvent(e) {
    e.stopPropagation();
    await this.toggleLike();
  }

  async renderButton() {
    const { id } = this._restaurant;
    if (await this.restaurantExists(id)) {
      this.isAdded = true;
    } else {
      this.isAdded = false;
    }

    this.className = this.isAdded ? 'active' : '';
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['class'];
  }

  async restaurantExists(id) {
    const restaurant = await FavoriteModel.getRestaurant(id);
    return !!restaurant;
  }

  render() {
    this.innerHTML = `
			<button 
        aria-label="like this movie" 
        class="favoriteButton ${this.className}">              
				${
          this.isAdded
            ? `<i 
                class="fas fa-check-circle fa-lg" 
                style="margin-right: .2em; color: green;">
               </i> Added to favorite`
            : `<i 
                class="fas fa-plus fa-lg" 
                style="margin-right: .2em; color: #fff;">
               </i>
               Add to Favorite`
        }	      
  		</button>
		`;
  }
}

window.customElements.define('favorite-button', FavoriteButton);
