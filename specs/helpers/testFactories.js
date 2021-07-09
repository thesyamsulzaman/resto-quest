import FavoriteRestaurantPresenter from '../../src/scripts/presenters/favorite-button-presenter';
import FavoriteRestaurant from '../../src/scripts/models/favorite';

const createLikeButtonWithRestaurant = async (restaurant) => {
  await FavoriteRestaurantPresenter.init({
    favoriteButtonContainer: document.querySelector(
      '#favoriteButtonContainer'
    ),
    favoriteRestaurants: FavoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonWithRestaurant };
