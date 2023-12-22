import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjQlEMTsS_Q6j8LVxoRmyKQcK0PTg0H_Q",
    authDomain: "slack-app-clone-e49ec.firebaseapp.com",
    projectId: "slack-app-clone-e49ec",
    storageBucket: "slack-app-clone-e49ec.appspot.com",
    messagingSenderId: "202004318242",
    appId: "1:202004318242:web:cbe949073c67119298227b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export { db, auth, serverTimestamp, provider };