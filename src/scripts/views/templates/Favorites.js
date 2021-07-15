import SkeletonCards from './SkeletonCard';

const FavoritesTemplate = () => `  
  <div class="content-header">
    <h2>Favorites</h2>
  </div>
   
  <restaurants-wrapper></restaurants-wrapper>  
`;

const FavoritesSkeleton = () => `  
  <div class="content-header">
    <h2>Favorites</h2>
  </div>
   
  <div class="restaurants">
    ${SkeletonCards(6)}
  </div>
`;

const FavoritesEmpty = () => `
  <div class="emptyPage">
    <img src="/images/plat.svg" width="300" />
    <h2>You havent booked any Restaurants</h2>
  </div>
`;

export { FavoritesTemplate, FavoritesSkeleton, FavoritesEmpty };
