import { combineReducers } from 'redux';

import tournaments from './tournamentReducer';
import auth from './authReducer';

export default combineReducers({
  tournaments,
  auth
});
