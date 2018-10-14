import {
  tournamentsRef,
  authRef,
  googleProvider,
  gameweekRef
} from '../config/firebase';

import {
  FETCH_USER,
  FETCH_TOURNAMENTS,
  FETCH_GAMEWEEK,
  UPDATE_USER
} from './types';

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

// users
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

export const UpdateUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: UPDATE_USER,
        payload: user
      });
    } else {
      dispatch({
        type: UPDATE_USER,
        payload: null
      });
    }
  });
};

// Sign in
export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(googleProvider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

// Sign out
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

// Gameweek
export const fetchGameweek = () => async dispatch => {
  gameweekRef.on('value', snapshot => {
    dispatch({
      type: FETCH_GAMEWEEK,
      payload: snapshot.val()
    });
  });
};
