const admin = require('firebase-admin');
const serviceAccount = require('./nitt---e-commerce-firebase-adminsdk-cqonw-76b6c703ec.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<your-database-name>.firebaseio.com'
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
