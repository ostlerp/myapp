import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import launches from './Example/stores/launches';

export default combineReducers({
  launches,
  form: formReducer
});