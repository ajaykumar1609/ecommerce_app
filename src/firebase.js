// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCs63No7dlzANoagBRykuLcj9uKQVuKvlI",
  authDomain: "ecommerce-app-a6d59.firebaseapp.com",
  projectId: "ecommerce-app-a6d59",
  storageBucket: "ecommerce-app-a6d59.appspot.com",
  messagingSenderId: "343548751714",
  appId: "1:343548751714:web:f9952df59820344dc0863b",
  measurementId: "G-1KRMKLFZWJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };