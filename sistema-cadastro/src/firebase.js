import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_L2j541VYa-rMLJYJ-kYi1El4LWbttQI",
  authDomain: "app-faculdade-nicolas.firebaseapp.com",
  projectId: "app-faculdade-nicolas",
  storageBucket: "app-faculdade-nicolas.firebasestorage.app",
  messagingSenderId: "210057314139",
  appId: "1:210057314139:web:e663e5700440d2933e647e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;