const RestaurantDetailTemplate = ({
  name,
  pictureId,
  rating,
  city,
  address,
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
      
        <div id="favoriteButtonContainer">
        </div>

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
    
  <div class="reviews-form">  
    <review-form></review-form>
  </div>

</div>


 
`;

const RestaurantsDetailNetworkErrorTemplate = () => `  
  <div class="errorPage">
    <svg version="1.1"
      id="wifi"
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="200px" height="200px"
      viewBox="0 0 20 20">

      <path 
        id="wifi3" 
        fill="#111" 
        fill-opacity="0.5" 
        d="M9.9,5C6.8,5,4,6.4,2.2,8.7l1.1,1.1c1.6-2,4-3.2,6.7-3.2c2.7,0,5.1,1.3,6.7,3.2l1.1-1.1
        C15.8,6.4,13,5,9.9,5z">
        <animate
            id="four"
            attributeName="fill-opacity"
            dur="500ms"
            values="0.5;1;0.5"
            calcMode="linear"
            begin="three.end+0.05s"/>
      </path>

      <path 
        id="wifi2" 
        fill="#111" 
        fill-opacity="0.5" 
        d="M9.9,8c-2.3,0-4.3,1.1-5.6,2.8l1.1,1.1c1-1.4,2.6-2.4,4.5-2.4c1.9,0,3.5,0.9,4.5,2.4l1.1-1.1
        C14.2,9.1,12.2,8,9.9,8z">
        <animate
            id="three"
            attributeName="fill-opacity"
            dur="500ms"
            values="0.5;1;0.5"
            calcMode="linear"
            begin="two.end+0.05s"/>
      </path>

      <path 
        id="wifi1" 
        fill="#111" 
        fill-opacity="0.5" 
        d="M9.9,11c-1.5,0-2.7,0.8-3.4,2l1.1,1.1c0.4-0.9,1.3-1.6,2.3-1.6s2,0.7,2.3,1.6l1.1-1.1
        C12.6,11.8,11.4,11,9.9,11z">
        <animate
            id="two"
            attributeName="fill-opacity"
            dur="500ms"
            values="0.5;1;0.5"
            calcMode="linear"
            begin="one.end+0.05s"/>
      </path>

      <circle 
        id="dot" 
        fill="#111" 
        fill-opacity="0.5" 
        cx="9.9" 
        cy="15.3" 
        r="1">
        <animate
            id="one"
            attributeName="fill-opacity"
            dur="500ms"
            values="0.5;1;0.5"
            calcMode="linear"
            begin="0s;four.end+0.05s"/>
      </circle>
    </svg>

    <h2>Oopsie, there must be a problem with your internet connection</h2>
  </div>
`;

export {
  RestaurantDetailTemplate,
  RestaurantsDetailNetworkErrorTemplate,
};
