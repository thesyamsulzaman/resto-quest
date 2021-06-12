const RestaurantDetail = ({
  name,
  pictureId,
  rating,
  city,
  address,
  description,
  customerReviews,
  menus: { foods, drinks },
}) => `  
    <div class="restaurant-jumbotron">           
      <img 
        class="restaurant-jumbotron-img" 
        src="https://restaurant-api.dicoding.dev/images/small/${pictureId}" 
        alt="Image of ${name}" 
      /> 
      <div class="restaurant-jumbotron-card">
        <p class="restaurant-jumbotron-card-header">${name}</p>
        <p class="restaurant-jumbotron-card-address">
          <i class="fas fa-map-marker-alt fa-sm" style="margin-right: 0.7em"></i>           
          ${address}, ${city}
        </p> 
        <p class="restaurant-jumbotron-card-rating">
          <i class="fas fa-star fa-sm" style="margin-right: 0.5em"></i>
          ${rating} ( ${customerReviews.length} Reviews )
        </p>            
        <p class="restaurant-jumbotron-card-description">
          ${description}
        </p> 
      </div>             
    </div>

    <div class="restaurant-menu">

      <h2 class="restaurant-menu-header"> Menu </h2>

      <div class="restaurant-menu-box">
        <p class="restaurant-menu-box-header">Foods</p> <hr/> 
        <ul class="restaurant-menu-box-list foods">
          ${foods
            .map((food) => `<li><p>${food.name}</p></li>`)
            .join('')}
        </ul>
      </div>  

      <div class="restaurant-menu-box"> 
        <p class="restaurant-menu-box-header">Drinks</p> <hr/>     
        <ul class="restaurant-menu-box-list drinks">
          ${drinks
            .map(
              (drink) => `
              <li>
                <p>${drink.name}</p>
              </li> `
            )
            .join('')}
        </ul>
      </div>
      </div>
    </div>  
  </div>
 
 
`;

export default RestaurantDetail;

const reviews = (customerReviews) => `
 <div class="reviews container">
    <h2 class="reviews-header">Reviews</h2>
    <div class="reviews-list">

      ${customerReviews
        .map(
          (review) => `
            <div class="reviews-card">
              <p class="reviews-card-name">${review.name}</p>
              <p class="reviews-card-comment">${review.review}</p>
              <p class="reviews-card-date">${review.date}</p>
            </div> 
          `
        )
        .join('')}
 
    
    <div class="reviews-form">
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Comment</label>
          <textarea></textarea>
        </div>
        <div>
          <input type="submit" value="Send"/>
        </div>
      </form>
    </div>
`;
