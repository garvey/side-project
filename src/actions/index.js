import { tournamentsRef, authRef, googleProvider } from '../config/firebase';

import { FETCH_USER, FETCH_TOURNAMENTS } from './types';

// TOURNAMENTS
export const fetchTournaments = uid => async dispatch => {
  tournamentsRef.child(uid).on('value', snapshot => {
    dispatch({
      type: FETCH_TOURNAMENTS,
      payload: snapshot.val()
    });
  });
};

export const addTournament = (newTournament, uid) => async dispatch => {
  tournamentsRef
    .child(uid)
    .push()
    .set(newTournament);
};

export const deleteTournament = (deleteTournament, uid) => async dispatch => {
  tournamentsRef
    .child(uid)
    .child(deleteTournament)
    .remove();
};

// USERS
export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

// SIGNIN
export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(googleProvider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};
