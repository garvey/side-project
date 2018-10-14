import firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';

const fire = firebase.initializeApp(FirebaseConfig);
export default firebase;

const databaseRef = firebase.database().ref();
export const tournamentsRef = databaseRef.child('tournaments');
export const gameweekRef = databaseRef.child('gameweek');

// Auth
export const authRef = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
