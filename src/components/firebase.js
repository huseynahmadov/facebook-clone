import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBM8j_fRjK8Ht6UCcNEP3J5-2lCRkDe6zA",
    authDomain: "facebook-clone-708d9.firebaseapp.com",
    projectId: "facebook-clone-708d9",
    storageBucket: "facebook-clone-708d9.appspot.com",
    messagingSenderId: "125460913119",
    appId: "1:125460913119:web:4c602fcfcc918e47e5426a",
    measurementId: "G-G00C8DM1GD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;