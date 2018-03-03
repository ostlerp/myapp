import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import 'bulma/css/bulma.css';

import rootReducer from './stores';
import App from './App/containers/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

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
