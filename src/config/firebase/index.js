import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDRh0-bJoLzn134jdkNKmIcXI0-gMXZtP8",
    authDomain: "aaa-blood-bank.firebaseapp.com",
    projectId: "aaa-blood-bank",
    storageBucket: "aaa-blood-bank.appspot.com",
    messagingSenderId: "834042787383",
    appId: "1:834042787383:web:39c2f54a2320c3ecc531b2",
    measurementId: "G-3YRL518SFF"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);