import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
  apiKey: "AIzaSyAwQmRWpq1FknZ_YvMTH1N6PwJCz2TVW2I",
  authDomain: "vuestest02.firebaseapp.com",
  databaseURL: "https://vuestest02.firebaseio.com",
  projectId: "vuestest02",
  storageBucket: "vuestest02.appspot.com",
  messagingSenderId: "273668768137",
  appId: "1:273668768137:web:fbedceadfef76d1479e158"
  };
  // Initialize Firabase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export {
    firebase,
    auth,
    db,
    storage,
    functions
}