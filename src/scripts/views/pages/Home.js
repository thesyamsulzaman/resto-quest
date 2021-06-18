/* eslint-disable no-use-before-define */
import Hero from '../templates/Hero';
import Features from '../templates/Features';
import Feature from '../templates/Feature';
import RestaurantsList from '../templates/RestaurantsList';
import Subscription from '../templates/Subscription';

import RestaurantModel from '../../models/restaurant';
import PageLoader from '../../utils/page-loader';
import ErrorPageTemplate from '../templates/ErrorPage';

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

    PageLoader.show();

    try {
      const restaurants = await RestaurantModel.getAll();
      PageLoader.hide();
      renderResult(restaurants.slice(0, 6));
    } catch (err) {
      fallbackResult(err);
    }

    function renderResult(restaurants) {
      const restaurantsWrapper = document.createElement(
        'restaurants-wrapper'
      );

      restaurantsWrapper.restaurants = restaurants;
      container.append(restaurantsWrapper);
    }

    function fallbackResult(err) {
      console.log('Error : ', err);
      container.innerHTML = ErrorPageTemplate;
    }
  },
};

export default Home;
