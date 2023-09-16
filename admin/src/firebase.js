import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "streamsphere-f09fe.firebaseapp.com",
  projectId: "streamsphere-f09fe",
  storageBucket: "streamsphere-f09fe.appspot.com",
  messagingSenderId: "558014701463",
  appId: "1:558014701463:web:fb62339f783803423faed2",
  measurementId: "G-3N38M31D5S",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
