const Restaurants = {
  async render() {
    return `
      <section id="content">
        <div class="content-header container">
          <h2>Explore</h2>
        </div>
        
        <div class="restaurants container">

        </div>
      </section>
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
    restaurants.forEach((restaurant) => {
      const card = document.createElement('restaurant-card');
      card.restaurant = restaurant;

      container.appendChild(card);
    });
  },
};

export default Restaurants;
