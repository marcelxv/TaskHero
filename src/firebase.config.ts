import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GithubAuthProvider } from "firebase/auth";

// const provider = new GithubAuthProvider();
// provider.addScope('repo');
// provider.setCustomParameters({
//     'allow_signup': 'false'
//   });
const firebaseConfig = {
  apiKey: "AIzaSyAq-7klaoICIZcUFzCWJq-6-WquKlS3XWk",
  authDomain: "taskhero-9de4e.firebaseapp.com",
  projectId: "taskhero-9de4e",
  storageBucket: "taskhero-9de4e.appspot.com",
  messagingSenderId: "414230991126",
  appId: "1:414230991126:web:4ea52c6106211485e64037",
  measurementId: "G-E63D3ZBHSE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
