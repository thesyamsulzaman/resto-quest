import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurant from '../src/scripts/models/favorite';

describe('Implementing Favorite Restaurants Contract', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).map(
      async (restaurant) => {
        await FavoriteRestaurant.deleteRestaurant(restaurant.id);
      }
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurant);
});
