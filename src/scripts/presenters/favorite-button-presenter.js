const favoriteButtonPresenter = {
  async init({
    favoriteButtonContainer,
    favoriteRestaurants,
    restaurant,
  }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._restaurant = restaurant;

    this.onAddRestaurant = this.onAddRestaurant.bind(this);
    this.onRemoveRestaurant = this.onRemoveRestaurant.bind(this);

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      await this._renderLiked();
    } else {
      await this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(
      id
    );
    return !!restaurant;
  },

  _renderLike() {
    this._favoriteButtonContainer.innerHTML = `<favorite-button init="inactive"></favorite-button>`;
    const favoriteButton = document.querySelector('favorite-button');
    favoriteButton.onClickHandler = this.onAddRestaurant;
  },

  _renderLiked() {
    this._favoriteButtonContainer.innerHTML = `<favorite-button init="active"></favorite-button>`;
    const favoriteButton = document.querySelector('favorite-button');
    favoriteButton.onClickHandler = this.onRemoveRestaurant;
  },

  async onAddRestaurant(event) {
    await this._favoriteRestaurants.putRestaurant(this._restaurant);
    this._renderButton();
  },

  async onRemoveRestaurant(event) {
    await this._favoriteRestaurants.deleteRestaurant(
      this._restaurant.id
    );
    this._renderButton();
  },
};

export default favoriteButtonPresenter;
