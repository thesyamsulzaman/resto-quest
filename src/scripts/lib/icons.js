import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faHamburger,
  faBars,
  faStar,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHamburger, faBars, faStar, faMapMarkerAlt);
dom.watch();
