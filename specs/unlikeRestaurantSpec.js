import FavoriteRestaurant from '../src/scripts/models/favorite';
import * as TestFactories from './helpers/testFactories';

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML =
      '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('Should show the unlike button that indicates the restaurant has been saved', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    expect(
      document.body.querySelector(
        '[aria-label="unlike this restaurant"]'
      )
    ).toBeTruthy();
  });

  it('Should not show the like button if the restaurant has been saved', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    expect(
      document.body.querySelector(
        '[aria-label="like this restaurant"]'
      )
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    document
      .querySelector('favorite-button[init="active"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
    await FavoriteRestaurant.getRestaurant(1);

    await FavoriteRestaurant.deleteRestaurant(1);

    document
      .querySelector('favorite-button[init="active"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
