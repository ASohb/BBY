import firebase from "firebase"
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyABNJWlhwFfohLXh3QvUBHncYTaWy4eof4",
    authDomain: "bibliotecayann.firebaseapp.com",
    projectId: "bibliotecayann",
    storageBucket: "bibliotecayann.appspot.com",
    messagingSenderId: "673529630846",
    appId: "1:673529630846:web:33e15b29ecf930dd86c82f"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();