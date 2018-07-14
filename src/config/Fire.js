import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAyXXTKFyfmm_S9LtcxBJv6rJfP7_Kokhs',
  authDomain: 'cupmarch-ebeb4.firebaseapp.com',
  databaseURL: 'https://cupmarch-ebeb4.firebaseio.com',
  projectId: 'cupmarch-ebeb4',
  storageBucket: 'cupmarch-ebeb4.appspot.com',
  messagingSenderId: '411840433343'
};
const fire = firebase.initializeApp(config);
export default fire;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
