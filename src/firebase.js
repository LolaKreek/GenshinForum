
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtJQITndUoogPFjMnB6uWILcdBaK1eDJ8",
  authDomain: "tutorialgenshin-ca29d.firebaseapp.com",
  projectId: "tutorialgenshin-ca29d",
  storageBucket: "tutorialgenshin-ca29d.appspot.com",
  messagingSenderId: "514926905818",
  appId: "1:514926905818:web:2b3d091ee41d85705c98e3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);