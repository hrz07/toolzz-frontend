// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      // apiKey: "AIzaSyA4JgbshkesS1iTqhpukkRwPZf9LDaDfCk",
      // authDomain: "toolzz-e5294.firebaseapp.com",
      // projectId: "toolzz-e5294",
      // storageBucket: "toolzz-e5294.appspot.com",
      // messagingSenderId: "177188147338",
      // appId: "1:177188147338:web:8859ddff581d448be89d73"

    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;