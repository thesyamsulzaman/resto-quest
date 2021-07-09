import SkeletonCards from './SkeletonCard';

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

export default RestaurantsList;
