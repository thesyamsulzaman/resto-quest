class RestauranstWrapper extends HTMLElement {
  constructor() {
    super();
    this._restaurants = null;
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  renderPlaceholder() {
    let template = this.innerHTML;

    template += `<h1> Template goes here </h1>`;

    return template;
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantCard =
        document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;
      this.appendChild(restaurantCard);
    });
  }
}

window.customElements.define(
  'restaurants-wrapper',
  RestauranstWrapper
);
