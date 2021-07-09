import FavoriteRestaurant from '../src/scripts/models/favorite';
import * as TestFactories from './helpers/testFactories';
import '../src/scripts/views/components/favorite-button';

xdescribe('Liking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<favorite-button></favorite-button>';
  };

  beforeEach(() => addLikeButtonContainer());

  it('should show the like button that indicates the restaurant hasnt been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show the like button if the restaurant hasnt been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to like the button', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
    FavoriteRestaurant.putRestaurant({ id: 1 });

    document
      .querySelector('button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);
    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('Should not be adding restaurant when its already saved', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
    await FavoriteRestaurant.putRestaurant({ id: 1 });

    document
      .querySelector('button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);
    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('Should not add the restaurant if it has no id', async () => {
    await TestFactories.createLikeButtonWithRestaurant({});
    document
      .querySelector('button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
