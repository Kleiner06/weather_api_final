import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGTValcdre1ZnxkZEsAH9JhqCytkJAfpI",
  authDomain: "weather-api-fce03.firebaseapp.com",
  databaseURL: "https://weather-api-e027a-default-rtdb.firebaseio.com",
  projectId: "weather-api-fce03",
  storageBucket: "weather-api-fce03.appspot.com",
  messagingSenderId: "1046846659873",
  appId: "1:1046846659873:web:8808131f1afa0019adb260",
  measurementId: "G-ZJN41BHGV4"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);


export default fire;