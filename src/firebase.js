import {getApp,getApps,initializeApp} from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv5Ec8WquRjMGp-BDdqId_z6pr6JnPzwY",
  authDomain: "delivery-a8d99.firebaseapp.com",
  databaseURL: "https://delivery-a8d99-default-rtdb.firebaseio.com",
  projectId: "delivery-a8d99",
  storageBucket: "delivery-a8d99.appspot.com",
  messagingSenderId: "890142457633",
  appId: "1:890142457633:web:1f58c4e73d8a07b64dc860",
  measurementId: "G-R29SRHGB7Y"
};


  const app=getApps.length>0?getApp():initializeApp(firebaseConfig)
  const storage =getStorage(app)
  const db =getFirestore(app)
  const provider = new GoogleAuthProvider();

  export{app,provider,db,storage}





  