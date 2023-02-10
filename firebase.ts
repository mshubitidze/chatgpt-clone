import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuCTX89jiPv0qz8IRiFfx3wQsILBF05uA",
  authDomain: "chatgpt-messenger-da73d.firebaseapp.com",
  projectId: "chatgpt-messenger-da73d",
  storageBucket: "chatgpt-messenger-da73d.appspot.com",
  messagingSenderId: "1020536273040",
  appId: "1:1020536273040:web:68449b14298f72933dc015"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
