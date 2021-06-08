import Hero from '../sections/Hero';
import Features from '../sections/Features';
import RestaurantsList from '../sections/RestaurantsList';

const Home = {
  async render() {
    return `
      ${Hero.render()}   
      ${Features.render()} 
      ${RestaurantsList.render()}
    `;
  },

  async afterRender() {
    const container = document.querySelector('.restaurants');

    container.innerHTML = `<loading-page></loading-page>`;

    const response = await fetch(
      'https://restaurant-api.dicoding.dev/list'
    );
    const jsonResponse = await response.json();
    const { restaurants } = jsonResponse;

    container.innerHTML = ``;
    restaurants.slice(0, 6).forEach((restaurant) => {
      const card = document.createElement('restaurant-card');
      card.restaurant = restaurant;

      container.appendChild(card);
    });
  },
};

export default Home;
