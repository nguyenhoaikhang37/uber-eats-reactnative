import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlt-KNMHbTSFi-Lbr4ubZQVjrhvuKr5Cw",
  authDomain: "rn-uber-eats-clone-596fc.firebaseapp.com",
  projectId: "rn-uber-eats-clone-596fc",
  storageBucket: "rn-uber-eats-clone-596fc.appspot.com",
  messagingSenderId: "810067574690",
  appId: "1:810067574690:web:9c33c390f293658532bcfb",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
