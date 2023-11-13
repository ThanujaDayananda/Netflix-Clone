import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from './seed';

const config = {
  apiKey: "AIzaSyDfbl8g-77SIix8iEnaRRhENOpCUtaEXjU",
  authDomain: "netflix-clone-841d3.firebaseapp.com",
  projectId: "netflix-clone-841d3",
  storageBucket: "netflix-clone-841d3.appspot.com",
  messagingSenderId: "219739314381",
  appId: "1:219739314381:web:d94865493985b903ccf184",
  measurementId: "G-B9P06YT8WW"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
