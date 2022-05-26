
import 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBUjU2glkxNwuLLuJqt20zwz23FadUtSpc",
    authDomain: "nike-project-e21ed.firebaseapp.com",
    databaseURL: "https://nike-project-e21ed-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nike-project-e21ed",
    storageBucket: "nike-project-e21ed.appspot.com",
    messagingSenderId: "935209904692",
    appId: "1:935209904692:web:b016c837e19ab584eb3861",
    measurementId: "G-R7YCWJ76S2"
  };
  
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);

  export default storage;
  