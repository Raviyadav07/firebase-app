// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH9pl3x4nz5I3sY_4mr2r6BUBcbvj4oxc",
  authDomain: "fir-app-9251c.firebaseapp.com",
  projectId: "fir-app-9251c",
  storageBucket: "fir-app-9251c.appspot.com",
  messagingSenderId: "228737962581",
  appId: "1:228737962581:web:9ea2a84450e7d3f6357adc",
  databaseURL:"https://fir-app-9251c-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);