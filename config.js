import firebase from 'firebase';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export const firebaseConfig = {
  apiKey: "AIzaSyAcMNyWJTtjx66MqoP6yn8AvjKyvxX4_fU",
  authDomain: "storytelling-app-47d20.firebaseapp.com",
  databaseURL: "https://storytelling-app-47d20-default-rtdb.firebaseio.com",
  projectId: "storytelling-app-47d20",
  storageBucket: "storytelling-app-47d20.appspot.com",
  messagingSenderId: "375725939614",
  appId: "1:375725939614:web:cdda62ef15c23439fc948f"
};




