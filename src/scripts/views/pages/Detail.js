/* eslint-disable no-use-before-define */
import UrlParser from '../../routes/url-parser';
import RestaurantModel from '../../models/restaurant';
import FavoriteRestaurant from '../../models/favorite';

import {
  RestaurantDetailTemplate,
  RestaurantsDetailNetworkErrorTemplate,
} from '../templates/RestaurantDetail';

import PageLoader from '../../utils/page-loader';
import SnackBarMessage from '../../utils/snackbar-initiator';
import FavoriteButtonPresenter from '../../presenters/favorite-button-presenter';

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

    async function renderResult(restaurant) {
      container.innerHTML = RestaurantDetailTemplate(restaurant);

      await FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector(
          '#favoriteButtonContainer'
        ),
        favoriteRestaurants: FavoriteRestaurant,
        restaurant,
      });
    }

    function fallBackResult(err) {
      console.log('Error : ', err);
      container.innerHTML = ErrorPageTemplate();
    }

    async function onReviewFormSubmit(event) {
      event.preventDefault();

      if (this.name === '' || this.review === '') {
        SnackBarMessage.init({
          type: 'failed',
          messageText: 'Please fill up the forms',
        });
        return;
      }

      try {
        const response = await RestaurantModel.addReview({
          id: url.id,
          name: this.name,
          review: this.review,
        });

        const restaurant = this.getRestaurant;
        restaurant.customerReviews = response.customerReviews;
        renderResult(restaurant);

        clearForm();

        SnackBarMessage.init({
          type: 'success',
          messageText: 'Review submitted',
        });
      } catch (error) {
        clearForm();

        SnackBarMessage.init({
          type: 'failed',
          messageText: 'Review Submitting failed',
        });

        console.log('Error : ', error);
      }
    }

    function clearForm() {
      document.querySelector('#name').value = '';
      document.querySelector('#review').value = '';
    }
  },
};

export default Detail;
