import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import 'bulma/css/bulma.css';

import appReducer from './appReducer';
import App from './App/containers/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(appReducer);

let root = document.getElementById('root');
let app = (
  <Provider store={store}>
    <App />
  </Provider>
);

if (root.hasChildNodes()) {
  hydrate(app, root);
} else {
  render(app, root);
}

registerServiceWorker();
