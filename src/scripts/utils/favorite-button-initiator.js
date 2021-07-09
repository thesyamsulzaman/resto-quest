const favoriteButton = {
  async init({ buttonContainer, restaurant }) {
    this._buttonContainer = buttonContainer;
    this._favoriteButton = document.createElement('favorite-button');

    this._favoriteButton.restaurant = restaurant;
    console.log(this._favoriteButton);

    this._buttonContainer.append(this._favoriteButton);
  },
};

export default favoriteButton;
