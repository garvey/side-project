import { combineReducers } from 'redux';

import tournaments from './tournamentReducer';
import auth from './authReducer';
import gameweek from './gameweekReducer';

export default combineReducers({
  tournaments,
  auth,
  gameweek
});
