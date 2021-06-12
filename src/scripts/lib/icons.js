import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faHamburger,
  faBars,
  faStar,
  faMapMarkerAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHamburger, faBars, faStar, faMapMarkerAlt, faTimes);
dom.watch();
