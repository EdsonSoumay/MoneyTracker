import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCIeys0gkLs-Pp38ZoTDcE2pIFtfj8GS4c",
  authDomain: "moneytracker-a622d.firebaseapp.com",
  databaseURL: "https://moneytracker-a622d-default-rtdb.firebaseio.com",
  projectId: "moneytracker-a622d",
  storageBucket: "moneytracker-a622d.appspot.com",
  messagingSenderId: "689406854131",
  appId: "1:689406854131:web:a093bff3e4747e89428886"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;