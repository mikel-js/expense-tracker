import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC1Jxeh8-kth3XSKrVl-8m8yA_hbviaH1o",
  authDomain: "expendify-17.firebaseapp.com",
  databaseURL: "https://expendify-17.firebaseio.com",
  projectId: "expendify-17",
  storageBucket: "expendify-17.appspot.com",
  messagingSenderId: "89180844553"
};

firebase.initializeApp(config)
const database = firebase.database()

export { firebase, database as default }