
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyBcOvFQskr9qwRHf5eu6y7UOU21u1taZXg",
  authDomain: "template-studio-firebase.firebaseapp.com",
  databaseURL: "https://template-studio-firebase.firebaseio.com",
  projectId: "template-studio-firebase",
  storageBucket: "template-studio-firebase.appspot.com",
  messagingSenderId: "420948055683"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();
export default firebase
