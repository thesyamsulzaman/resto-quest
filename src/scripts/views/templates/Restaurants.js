import SkeletonCards from './SkeletonCard';

const RestaurantsTemplate = () => `
  <div class="content-header">
    <h2>Explore</h2>
  </div> 
  <restaurants-wrapper></restaurants-wrapper>  
`;
const RestaurantsSkeleton = () => `
  <div class="content-header">
    <h2>Explore</h2>
  </div> 
  <div class="restaurants">
    ${SkeletonCards(6)}
  </div>
`;

export { RestaurantsTemplate, RestaurantsSkeleton };
