import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import 'bulma/css/bulma.css';

import appReducer from './appReducer';
import App from './App/containers/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(appReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
