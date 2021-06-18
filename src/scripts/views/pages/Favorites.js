/* eslint-disable no-use-before-define */
import FavoriteModel from '../../models/favorite';
import PageLoader from '../../utils/page-loader';
import ErrorPageTemplate from '../templates/ErrorPage';
import FavoritesTemplate from '../templates/Favorites';

const Favorites = {
  async render() {
    return `
      <section id="content">     
        <div class="container containerWithLoader">        
        </div>
      </section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('#content .container');

    PageLoader.show();

    try {
      const restaurants = await FavoriteModel.getAllRestaurants();
      PageLoader.hide();
      renderResult(restaurants);
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

    function fallBackResult() {
      container.innerHTML = ErrorPageTemplate();
    }
  },
};

export default Favorites;
