const RestaurantsList = {
  render() {
    return `
      <section id="restaurants-list">
        <div class="restaurants-list-header container">
          <h2>Explore <b>200+</b> Restaurants</h2>
          <a href="${`#/restaurants`}">View More</a>
        </div>
        <div class="restaurants container">
        </div>
      </section>
    `;
  },

};

export default RestaurantsList;
