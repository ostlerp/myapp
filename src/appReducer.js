import { combineReducers } from 'redux';
import home from './Home/reducers/home';

const app = combineReducers({
  home
});

export default app;