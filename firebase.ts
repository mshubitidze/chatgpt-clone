import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxJeavIinC7xL5ZyKJKO6fZNChtyNqc9o",
  authDomain: "chatgpt-clone-da184.firebaseapp.com",
  projectId: "chatgpt-clone-da184",
  storageBucket: "chatgpt-clone-da184.appspot.com",
  messagingSenderId: "404745497864",
  appId: "1:404745497864:web:864267a71309375d9a50bd"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
