import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faHamburger } from '@fortawesome/free-solid-svg-icons/faHamburger';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

library.add(
  faHamburger,
  faBars,
  faStar,
  faMapMarkerAlt,
  faTimes,
  faCheckCircle,
  faPlus,
  faExclamationCircle
);
dom.watch();
