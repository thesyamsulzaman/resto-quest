const RestaurantDetail = ({
  name,
  pictureId,
  rating,
  city,
  address,
  description,
  categories,
  customerReviews,
  menus: { foods, drinks },
}) => `  
  <div class="restaurant">
    <div class="restaurant-jumbotron">           
      <img 
        class="restaurant-jumbotron-img" 
        src="https://restaurant-api.dicoding.dev/images/small/${pictureId}" 
        alt="Image of ${name}" 
      /> 
      <div class="restaurant-jumbotron-card">
        <p class="restaurant-jumbotron-card-header">${name}</p>
        <div class="restaurant-jumbotron-card-categories">
          ${categories
            .map(
              (category) => `
                <span class="category-label">
                  ${category.name}
                </span> `
            )
            .join('')}
        </div>
        <p class="restaurant-jumbotron-card-address">
          <i 
            class="fas fa-map-marker-alt fa-sm" 
            style="margin-right: 0.7em">
          </i>           
          ${address}, ${city}
        </p> 
        <p class="restaurant-jumbotron-card-rating">
          <i 
            class="fas fa-star fa-sm" 
            style="margin-right: 0.5em">
          </i>
          ${rating} ( ${customerReviews.length} Reviews )
        </p>            
      

        <favorite-button></favorite-button>     

      </div>             
    </div>

    <div class="restaurant-menu">
      <div class="restaurant-menu-wrapper">
        <div class="restaurant-menu-box">
          <p class="restaurant-menu-box-header">Foods</p> <hr/> 
          <ul class="restaurant-menu-box-list foods">
            ${foods
              .map(
                (food) => `
                  <li>
                    <p>${food.name}</p>
                  </li>
              `
              )
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
  </div>
</div>

<div class="reviews">
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
  </div>
    
  <div class="reviews-form containerWithLoader">  
    <review-form></review-form>
  </div>

</div>


 
`;

export default RestaurantDetail;
