import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCeHvoi-eUPpeKbv3mEDtedWJ_AY-Fw4Co",
  authDomain: "chatgpt-clone-c5098.firebaseapp.com",
  projectId: "chatgpt-clone-c5098",
  storageBucket: "chatgpt-clone-c5098.appspot.com",
  messagingSenderId: "883411294915",
  appId: "1:883411294915:web:905dec433e38292aeae076"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
