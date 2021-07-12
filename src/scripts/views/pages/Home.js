import {
  Hero,
  Features,
  Feature,
  RestaurantsList,
  RestaurantsListNetworkError,
  Subscription,
} from '../templates/Home';

import RestaurantModel from '../../models/restaurant';
import PageLoader from '../../utils/page-loader';

const Home = {
  async render() {
    return `
      ${Hero()}         
      ${Features()}  
      ${Feature()}   
      ${RestaurantsList()} 
      ${Subscription()}      
    `;
  },

  async afterRender() {
    const container = document.querySelector('.containerWithLoader');

    // PageLoader.show();

    try {
      const restaurants = await RestaurantModel.getAll();
      // PageLoader.hide();
      renderResult(restaurants.slice(0, 6));
    } catch (err) {
      fallbackResult(err);
    }

    function renderResult(restaurants) {
      const restaurantsWrapper = document.createElement(
        'restaurants-wrapper'
      );

      restaurantsWrapper.restaurants = restaurants;
      container.parentNode.replaceChild(
        restaurantsWrapper,
        container
      );
    }

    function fallbackResult(err) {
      console.log('Error : ', err);
      container.innerHTML = RestaurantsListNetworkError();
    }
  },
};

export default Home;
