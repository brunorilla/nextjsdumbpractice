import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
const serviceAccount = require('../../firebasecreds.json'); // Path to your service account credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Other configuration options
});

// Access Firestore
export const firestore = admin.firestore();

// Example usage: Add a document to a collection
