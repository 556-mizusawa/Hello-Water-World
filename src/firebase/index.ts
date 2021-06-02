import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

const config = {
  apiKey: process.env.REACT_APP_HWW_API_KEY,
  authDomain: process.env.REACT_APP_HWW_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_HWW_PROJECT_ID,
  storageBucket: process.env.REACT_APP_HWW_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_HWW_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_HWW_APP_ID,
  measurementId: process.env.REACT_APP_HWW_APP_MEASUREMENT_ID,
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const FirebaseTimeStamp = firebase.firestore.Timestamp;
