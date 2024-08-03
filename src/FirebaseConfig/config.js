import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: import.meta.env.VITE_APP_API_URL,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENTID,

// Initialize Firebase
};
console.log(import.meta.env);
export const app = initializeApp(firebaseConfig);
