import FavoriteRestaurant from '../src/scripts/models/favorite';
import * as TestFactories from './helpers/testFactories';

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<favorite-button></favorite-button>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('Should show the unlike button that indicates the restaurant has been saved', async () => {
    //TestFactories.createLikeButtonWithRestaurant({ id: 1 });
    const favoriteButton = document.querySelector('favorite-button');
    favoriteButton.restaurant = { id: 1 };

    console.log(await FavoriteRestaurant.getAllRestaurants());
    console.log(document.querySelector('button'));
    expect(
      document.body.querySelector(
        '[aria-label="unlike this restaurant"]'
      )
    ).toBeTruthy();
  });

  //it('Should not show the like button if the restaurant has been saved', async () => {
  //await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

  //await FavoriteRestaurant.getRestaurant(1);

  //expect(
  //document.body.querySelector(
  //'[aria-label="like this restaurant"]'
  //)
  //).toBeFalsy();
  //});

  //it('should be able to remove liked restaurant from the list', async () => {
  //await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

  //await FavoriteRestaurant.getRestaurant(1);
  //await FavoriteRestaurant.getAllRestaurants();

  //await document
  //.querySelector('[aria-label="unlike this restaurant"]')
  //.dispatchEvent(new Event('click'));

  //console.log(await FavoriteRestaurant.getAllRestaurants());

  //expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  //});

  //it('should not throw error if the unliked restaurant is not in the list', async () => {
  //await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
  //await FavoriteRestaurant.getRestaurant(1);

  //// hapus dulu film dari daftar film yang disukai
  //await FavoriteRestaurant.deleteRestaurant(1);

  //// kemudian, simulasikan pengguna menekan widget batal menyukai film
  //document
  //.querySelector('[aria-label="unlike this restaurant"]')
  //.dispatchEvent(new Event('click'));

  //expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  //});
});
