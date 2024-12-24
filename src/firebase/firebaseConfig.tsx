import { initializeApp  } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF6z7aTn3EHi7okz5-3Rp22GUItS46vAg",
  authDomain: "mini-react-chatapp.firebaseapp.com",
  projectId: "mini-react-chatapp",
  storageBucket: "mini-react-chatapp.firebasestorage.app",
  messagingSenderId: "462227971607",
  appId: "1:462227971607:web:f472d10d58969aa9408652"
  
};

// Initialize Firebase
const app:any = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth:any  = getAuth(app);
export const db:any = getFirestore(app);