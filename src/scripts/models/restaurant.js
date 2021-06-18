import ENDPOINT from '../constants/endpoint';

class Restaurants {
  static async getAll() {
    const response = await fetch(ENDPOINT.ALL());
    // const response = await fetch('./restaurants.json');
    const jsonResponse = await response.json();

    return jsonResponse.restaurants;
  }

  static async get(id) {
    const response = await fetch(ENDPOINT.DETAIL(id));
    // const response = await fetch('./restaurant.json');
    const jsonResponse = await response.json();

    return jsonResponse.restaurant;
  }

  static async addReview(body) {
    const response = await fetch(ENDPOINT.ADD_REVIEW(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(body),
    });

    const jsonResponse = await response.json();
    return jsonResponse;
  }
}

export default Restaurants;
