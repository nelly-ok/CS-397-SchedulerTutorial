import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxnlPCyu-NHkc0vd-azLdT8C5IygSY6H4",
  authDomain: "schedulertutorial-b9347.firebaseapp.com",
  databaseURL: "https://schedulertutorial-b9347.firebaseio.com",
  projectId: "schedulertutorial-b9347",
  storageBucket: "schedulertutorial-b9347.appspot.com",
  messagingSenderId: "126688990865",
  appId: "1:126688990865:web:4d15d052497ae74bc7d130",
  measurementId: "G-8B6MEDSCMW"
};

firebase.initializeApp(firebaseConfig);

export { firebase };