import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB5Oy4nrdHF88sDsfygdCuQFKGbDI_APlQ",
  authDomain: "phone-number-auth-b747c.firebaseapp.com",
  projectId: "phone-number-auth-b747c",
  storageBucket: "phone-number-auth-b747c.appspot.com",
  messagingSenderId: "290903840070",
  appId: "1:290903840070:web:5f72076b1bfedd455d0147",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
