const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(async ({ I }) => {
  I.amOnPage('/#/restaurants');

  const firstRestaurant = locate(
    '.restaurant-card-body-name'
  ).first();

  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('favorite-button[init="inactive"]');
  I.click('favorite-button[init="inactive"]');
});

Scenario(
  'Liking first single movie on the restaurants page',
  async ({ I }) => {
    I.amOnPage('/#/favorites');
    I.seeElement('restaurant-card');
  }
);

Scenario(
  'Unliking first single movie on the favorite page',
  async ({ I }) => {
    I.amOnPage('/#/favorites');
    I.seeElement('restaurant-card');

    I.click(locate('.restaurant-card-body-name').first());

    I.seeElement('favorite-button[init="active"]');
    I.click('favorite-button[init="active"]');

    I.amOnPage('/#/favorites');
    I.dontSeeElement('restaurant-card');
  }
);
