import Restaurants from '../views/pages/Restaurants';
import Favorites from '../views/pages/Favorites';
import Detail from '../views/pages/Detail';
import Home from '../views/pages/Home';

const routes = {
  '/': Home, // default page
  '/restaurants': Restaurants,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
