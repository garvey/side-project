import { FETCH_GAMEWEEK } from '../actions/types';

export default (state = 'loading', action) => {
  switch (action.type) {
    case FETCH_GAMEWEEK:
      return action.payload;
    default:
      return state;
  }
};
