import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BreweriesProvider from './providers/BreweriesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BreweriesProvider>
    <App />
  </BreweriesProvider>,
);

serviceWorker.unregister();
