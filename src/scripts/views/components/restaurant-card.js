class RestaurantCard extends HTMLElement {
  constructor() {
    super();
    this._restaurant = null;
  }

  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
  }

  render() {
    const { id, name, description, pictureId, city, rating } =
      this._restaurant;

    this.innerHTML = `
      <div class="restaurant-card" data-key="${id}">
        <div class="restaurant-card-img">
          <img 
            class="" 
            height="300" 
            width="200" 
            src="https://restaurant-api.dicoding.dev/images/small/${pictureId}" 
            alt="Image of ${name}" 
            crossorigin="anonymous"
          />
          <div class="restaurant-card-img-info">
            <p class="restaurant-card-img-info-city">
              <i class="fas fa-map-marker-alt fa-sm" style="margin-right: 0.5em"></i>
              ${city}
            </p>
            <p class="restaurant-card-img-info-rating">
              <i class="fas fa-star fa-sm" style="margin-right: 0.5em"></i>
              ${rating}
            </p>
          </div>
        </div>
        <div class="restaurant-card-body">
          <a href="#/detail/${id}" class="restaurant-card-body-name">
            ${name}
          </a>
          <p class="restaurant-card-body-description">
            ${description}
          </p>
          <a class="restaurant-card-body-link" href="#/detail/${id}">Detail</a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('restaurant-card', RestaurantCard);
