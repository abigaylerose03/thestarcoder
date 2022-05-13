import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrdHGd03KlrcyQ1hZfRj1DVgMFm2eXQyQ",
  authDomain: "starcoder-c0769.firebaseapp.com",
  projectId: "starcoder-c0769",
  storageBucket: "starcoder-c0769.appspot.com",
  messagingSenderId: "390078537344",
  appId: "1:390078537344:web:8dea12f0bca6b148d61065",
  measurementId: "G-PHXFPSBH7N"
};

firebase.initializeApp(firebaseConfig);
export const initauth = firebase.auth();