import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6aNQ8UDzfVGTYK03kRm7EILEqeJJ0kpY",
  authDomain: "slack-clone-374bd.firebaseapp.com",
  databaseURL: "https://slack-clone-374bd.firebaseio.com",
  projectId: "slack-clone-374bd",
  storageBucket: "slack-clone-374bd.appspot.com",
  messagingSenderId: "346171042022",
  appId: "1:346171042022:web:cdde9bd0097f3df513f327",
  measurementId: "G-D0S9HBQSL3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
