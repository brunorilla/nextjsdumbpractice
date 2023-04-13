import * as admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Initialize Firebase Admin SDK
const serviceAccount = require('../../firebasecreds.json'); // Path to your service account credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Other configuration options
});

// Access Firestore
const firestore = admin.firestore();
const auth = admin.auth;

export {firestore, auth}
// Example usage: Add a document to a collection



