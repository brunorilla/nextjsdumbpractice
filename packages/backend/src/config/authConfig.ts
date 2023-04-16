import {initializeApp} from "firebase-admin";
import {getAuth} from 'firebase/auth';

const appCreds = require('../../firebaseConfig.json');

const app = initializeApp(appCreds)

const auth = getAuth(app);


export default auth;
