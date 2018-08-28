import { createStore, applyMiddleware } from 'redux';
import tournaments from './config/fire';
import thunkMiddleware from 'redux-thunk';

/**
 * ACTION TYPES
 */
const GET_TOURNAMENTS = 'get tournaments';
/**
 * ACTION CREATORS
 */
export const getTournaments = tournaments => ({
  type: GET_TOURNAMENTS,
  tournaments
});
/**
 * THUNKS
 */
export function getTasksThunk() {
  return dispatch => {
    const tournaments = [];
    database
      .ref(`/tournaments`)
      .once('value', snap => {
        snap.forEach(data => {
          let task = data.val();
          tasks.push(task);
        });
      })
      .then(() => dispatch(getTasks(tasks)));
  };
}
