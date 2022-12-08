import {getApp,getApps,initializeApp} from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAA6PBro0QtMnj-yvYQxo56I_w4uhtnkjQ",
  authDomain: "delivrey-a6f93.firebaseapp.com",
  projectId: "delivrey-a6f93",
  storageBucket: "delivrey-a6f93.appspot.com",
  messagingSenderId: "979126268393",
  appId: "1:979126268393:web:a6a8e6a1df21f201b69b78",
  measurementId: "G-P1Y6RQKD2P"
};
  const app=getApps.length>0?getApp():initializeApp(firebaseConfig)
  const storage =getStorage(app)
  const firestore =getFirestore(app)
  const provider = new GoogleAuthProvider();

  export{app,provider,firestore,storage}

