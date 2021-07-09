const createLikeButtonWithRestaurant = (restaurant) => {
  const favoriteButton = document.querySelector('favorite-button');
  favoriteButton.restaurant = restaurant;
};

export { createLikeButtonWithRestaurant };
