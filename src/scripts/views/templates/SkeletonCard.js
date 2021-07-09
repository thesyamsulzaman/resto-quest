const SkeletonCard = () => `
  <div class="restaurant-card" data-key="">
    <div class="restaurant-card-img">
      <img 
        class="" 
        src="/images/placeholder.png" 
        alt="Image of Skeleton" 
      />
      <div class="restaurant-card-img-info">
        <p class="restaurant-card-img-info-city--loading">
        </p>
        <p class="restaurant-card-img-info-rating--loading">
        </p>
      </div>
    </div>
    <div class="restaurant-card-body">
      <a href="#/detail" class="restaurant-card-body-name--loading">
      </a>
      <p class="restaurant-card-body-description--loading">
      </p>
      <a class="restaurant-card-body-link--loading" href="#/detail"></a>
    </div>
  </div>
`;

const SkeletonCards = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += SkeletonCard();
  }
  return template;
};

export default SkeletonCards;
