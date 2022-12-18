import {getApp,getApps,initializeApp} from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9HkYLRkMyDDdku-eWUROAOBLoXOkSSQw",
  authDomain: "delivering-72385.firebaseapp.com",
  projectId: "delivering-72385",
  storageBucket: "delivering-72385.appspot.com",
  messagingSenderId: "703954036294",
  appId: "1:703954036294:web:4aa4ecf6b55d4e27610c47",
  measurementId: "G-DLLDVG7ZCY"
};
  const app=getApps.length>0?getApp():initializeApp(firebaseConfig)
  const storage =getStorage(app)
  const db =getFirestore(app)
  const provider = new GoogleAuthProvider();

  export{app,provider,db,storage}





  