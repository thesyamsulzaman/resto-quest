import SkeletonCards from './SkeletonCard';

const Hero = () => `
  <section id="hero" class="" alt="">
    <div class="hero-jumbotron-overlay"></div>
    <div class="hero-jumbotron-content container">
      <div class="hero-jumbotron-content-texts">
        <h1>Find what's best for you</h1>
        <p>
          Highly curated Restaurants are laid down just for you,
          Be sure not to miss out, Enjoy exploring them.
        </p>         
      </div>
    </div>
  </section>
`;

const Features = () => `
  <section id="features">
    <div class="feature-cards container">
    
      <div class="feature-card">
        <img
          class="feature-card-img"
          src="./images/feature_1.jpg"
          height="380"
          width="300"
          alt=""
        />
        <div class="feature-card-description">
          <p class="feature-card-description-header">
            Qualified and Professionals
          </p>
          <p class="feature-card-description-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolores ipsa quibusdam reiciendis exercitationem tenetub
          </p>              
        </div>
      </div>

      <div class="feature-card">
        <img
          class="feature-card-img"
          src="./images/feature_2.jpg"
          height="380"
          width="300"
          alt=""
        />
        <div class="feature-card-description">
          <p class="feature-card-description-header">
            High Quality dairy products
          </p>
          <p class="feature-card-description-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolores ipsa quibusdam reiciendis exercitationem tenetub
          </p>              
        </div>
      </div>

      <div class="feature-card">
        <img
          class="feature-card-img"
          src="./images/feature_3.jpg"
          height="380"
          width="300"
          alt=""
        />
        <div class="feature-card-description">
          <p class="feature-card-description-header">
            24 Hours always on
          </p>
          <p class="feature-card-description-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolores ipsa quibusdam reiciendis exercitationem tenetub
          </p>              
        </div>
      </div>
      
    </div>
  </section>
`;

const Feature = () => `
  <section id="feature">
    <div class="feature container">          
      <img class="feature-img" src="images/access-everywhere.svg" alt="">            
      <div class="feature-info">
        <h2 class="feature-info-header">Available in 20+ locations, access it anywhere and anytime.</h2>
        <div class="feature-info-body">
          
          <div class="feature-info-card">
            <img class="feature-info-card-img" src="images/table-set.svg" alt="" />
            <div class="feature-info-card-desc">
              <p class="feature-info-card-desc-header">Table will be all set just for you</p>
              <p class="feature-info-card-desc-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident labore iure ab facere error. 
              </p>
            </div>
          </div>

          <div class="feature-info-card">
            <img class="feature-info-card-img" src="images/find-everywhere.svg" alt=""/>
            <div class="feature-info-card-desc">
              <p class="feature-info-card-desc-header">Stay updated everywhere you go</p>
              <p class="feature-info-card-desc-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident labore iure ab facere error.          
              </p>
            </div>
          </div>
          
        </div>
      </div>          
    </div>
  </section>
`;

const RestaurantsList = () => `
  <section id="restaurants-list">
    <div class="container"> 
      <div class="restaurants-list-header">
        <h2>Explore <b>200+</b> Restaurants</h2>
        <a href="${`#/restaurants`}" name="restaurants">View More</a>
      </div>  
      <div>
        <div class="restaurants containerWithLoader">
          ${SkeletonCards(6)}
        </div>    
      </div>
    </div>
  </section>
`;

const RestaurantsListNetworkError = () => `
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

const Subscription = () => `
  <section id="subscription">
    <div class="subscription container">
      <h2 class="subscription-header">Subscribe to our Newsletter</h2>
      <form action="" class="subscription-form">
        <div class="form-group">                   
          <label for="email">
          </label>
          <input type="email" name="email" id="email" class="form-control" placeholder="youremail@gmail.com"/>             
        </div>  
        <div class="form-group">          
          <input class="form-control" id="subscribe" type="submit" value="Subscribe" />
        </div>         
      </form>
    </div>       
  </section>
`;

export {
  Hero,
  Features,
  Feature,
  RestaurantsList,
  RestaurantsListNetworkError,
  Subscription,
};
