/* eslint-disable no-use-before-define */

import RestaurantModel from '../../models/restaurant';

import {
  RestaurantsTemplate,
  RestaurantsSkeletonTemplate,
  RestaurantsNetworkErrorTemplate,
} from '../templates/Restaurants';

const Restaurants = {
  async render() {
    return `
      <section id="content">                           
        <div class="container containerWithLoader">          
          ${RestaurantsSkeletonTemplate()}
        </div>          
      </section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('#content .container');

    try {
      const restaurants = await RestaurantModel.getAll();
      renderResult(restaurants);
    } catch (err) {
      console.log('Error : ', err);
      fallBackResult();
    }

    function renderResult(restaurants) {
      container.innerHTML = RestaurantsTemplate();
      const restaurantsWrapper = document.querySelector(
        'restaurants-wrapper'
      );
      restaurantsWrapper.restaurants = restaurants;
    }

    function fallBackResult() {
      container.innerHTML = RestaurantsNetworkErrorTemplate();
    }
  },
};

export default Restaurants;
