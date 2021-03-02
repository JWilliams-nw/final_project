const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD4jYHyxTbajJlRUqfzEV1w7P8eHHOYYX4",
  authDomain: "final-project-6dc13.firebaseapp.com",
  projectId: "final-project-6dc13",
  storageBucket: "final-project-6dc13.appspot.com",
  messagingSenderId: "388947677610",
  appId: "1:388947677610:web:81f2367175df424a229bd3"

} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase