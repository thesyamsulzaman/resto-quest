import 'regenerator-runtime'; /* for async await transpile */
import './lib/icons';
import './views/components';
import '../styles/main.css';
import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
  content: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
