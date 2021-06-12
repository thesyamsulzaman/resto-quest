import UrlParser from '../../routes/url-parser';
import RestaurantDetail from '../templates/RestaurantDetail';

const Detail = {
  async render() {
    return `
      <section id="content">  
       <div class="restaurant container">
        
       </div>             
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.querySelector('.restaurant');

    container.innerHTML = '<loading-page></loading-page>';

    const response = await fetch(
      `https://restaurant-api.dicoding.dev/detail/${url.id}`
    );

    const jsonResponse = await response.json();
    const { restaurant } = jsonResponse;

    container.innerHTML = RestaurantDetail(restaurant);
  },
};

export default Detail;
