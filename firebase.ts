import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCnc1z_v6ECkRT2QNuRh-32Qd03hCG23g",
  authDomain: "chatgpt-messenger-43407.firebaseapp.com",
  projectId: "chatgpt-messenger-43407",
  storageBucket: "chatgpt-messenger-43407.appspot.com",
  messagingSenderId: "121019733239",
  appId: "1:121019733239:web:651fd609709e2433b62ff2"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };