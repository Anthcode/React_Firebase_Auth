import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_AUTH,

  databaseURL: process.env.REACT_APP_DATA,

  projectId: process.env.REACT_APP_PROJ,

  storageBucket: process.env.REACT_APP_STOR,

  messagingSenderId: process.env.REACT_APP_MES,

  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = getApps.Length > 0 ? getApps() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export { app, auth, db };
