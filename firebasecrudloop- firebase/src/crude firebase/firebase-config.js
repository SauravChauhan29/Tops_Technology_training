import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBzr5JRRJcsDebsS0G6e7NYQcfzyADVi3k",
  authDomain: "crud-app-dev-11183.firebaseapp.com",
  databaseURL: "https://crud-app-dev-11183-default-rtdb.firebaseio.com",
  projectId: "crud-app-dev-11183",
  storageBucket: "crud-app-dev-11183.appspot.com",
  messagingSenderId: "225916417884",
  appId: "1:225916417884:web:54f4b9ddf28f6bb9987399"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}