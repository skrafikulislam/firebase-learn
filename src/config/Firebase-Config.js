// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsifmWOrq8co9Y7BvRlsgWhuq4APJuKKY",
  authDomain: "fir-learn-a0b05.firebaseapp.com",
  projectId: "fir-learn-a0b05",
  storageBucket: "fir-learn-a0b05.appspot.com",
  messagingSenderId: "694352437751",
  appId: "1:694352437751:web:89000e195b0e5625d4cef2",
  measurementId: "G-TVZXYYBPZM",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

