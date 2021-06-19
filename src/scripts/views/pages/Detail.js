/* eslint-disable no-use-before-define */
import UrlParser from '../../routes/url-parser';
import RestaurantModel from '../../models/restaurant';

import ErrorPageTemplate from '../templates/ErrorPage';
import RestaurantDetailTemplate from '../templates/RestaurantDetail';
import PageLoader from '../../utils/page-loader';

const Detail = {
  async render() {
    return `
      <section id="content">  
       <div class="container containerWithLoader">

       </div>             
      </section>      
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.querySelector('#content .container');

    PageLoader.show();

    try {
      const restaurant = await RestaurantModel.get(url.id);
      PageLoader.hide();
      renderResult(restaurant);

      const reviewForm = document.querySelector('review-form');
      reviewForm.restaurant = restaurant;
      reviewForm.submitEvent = onReviewFormSubmit;
    } catch (err) {
      fallBackResult(err);
    }

    function renderResult(restaurant) {
      container.innerHTML = RestaurantDetailTemplate(restaurant);
      container.querySelector('favorite-button').restaurant =
        restaurant;
    }

    function fallBackResult(err) {
      console.log('Error : ', err);
      container.innerHTML = ErrorPageTemplate();
    }

    async function onReviewFormSubmit(event) {
      event.preventDefault();
      if (this.name === '' && this.review === '') return;
      try {
        const response = await RestaurantModel.addReview({
          id: url.id,
          name: this.name,
          review: this.review,
        });
        const restaurant = this.getRestaurant;
        restaurant.customerReviews = response.customerReviews;
        renderResult(restaurant);
      } catch (error) {
        console.log('Error : ', error);
      }
    }
  },
};

export default Detail;
