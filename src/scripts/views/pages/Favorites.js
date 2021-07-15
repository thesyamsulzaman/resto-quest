/* eslint-disable no-use-before-define */
import FavoriteModel from '../../models/favorite';

import {
  FavoritesTemplate,
  FavoritesSkeleton,
  FavoritesEmpty,
} from '../templates/Favorites';

const Favorites = {
  async render() {
    return `
      <section id="content">     
        <div class="container containerWithLoader">        
          ${FavoritesSkeleton()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('#content .container');

    try {
      const restaurants = await FavoriteModel.getAllRestaurants();
      if (restaurants.length > 0) {
        renderResult(restaurants);
      } else {
        renderEmptyResult();
      }
    } catch (err) {
      console.log('Error : ', err);
      fallBackResult(err);
    }

    function renderResult(restaurants) {
      container.innerHTML = FavoritesTemplate();
      const restaurantsWrapper = document.querySelector(
        'restaurants-wrapper'
      );
      restaurantsWrapper.restaurants = restaurants;
    }

    function renderEmptyResult() {
      container.innerHTML = FavoritesEmpty();
    }

    function fallBackResult() {
      container.innerHTML = ErrorPageTemplate();
    }
  },
};

export default Favorites;
