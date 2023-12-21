import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjQlEMTsS_Q6j8LVxoRmyKQcK0PTg0H_Q",
    authDomain: "slack-app-clone-e49ec.firebaseapp.com",
    projectId: "slack-app-clone-e49ec",
    storageBucket: "slack-app-clone-e49ec.appspot.com",
    messagingSenderId: "202004318242",
    appId: "1:202004318242:web:cbe949073c67119298227b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default (auth)