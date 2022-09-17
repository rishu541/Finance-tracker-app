import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyACOz02MZzRCtkAbt00OfCp_crfCIlA2fk',
  authDomain: 'budgeti-2ea6b.firebaseapp.com',
  projectId: 'budgeti-2ea6b',
  storageBucket: 'budgeti-2ea6b.appspot.com',
  messagingSenderId: '329312462040',
  appId: '1:329312462040:web:354cb122c3cfecb175e3ad',
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, timestamp};
