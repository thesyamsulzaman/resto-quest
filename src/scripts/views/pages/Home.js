import Hero from '../templates/Hero';
import Features from '../templates/Features';
import Feature from '../templates/Feature';
import RestaurantsList from '../templates/RestaurantsList';
import Subscription from '../templates/Subscription';

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
    const container = document.querySelector('.restaurants');

    container.innerHTML = `<loading-page></loading-page>`;

    const response = await fetch(
      'https://restaurant-api.dicoding.dev/list'
    );

    container.innerHTML = ``;
    const jsonResponse = await response.json();
    const { restaurants } = jsonResponse;

    restaurants.slice(0, 6).forEach((restaurant) => {
      const card = document.createElement('restaurant-card');
      card.restaurant = restaurant;

      container.appendChild(card);
    });
  },
};

export default Home;
