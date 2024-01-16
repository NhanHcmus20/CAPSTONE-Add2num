// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUxvmQmcwbbroAmPqiEJZSfBaJaQVJuuc",
  authDomain: "add2num-dba83.firebaseapp.com",
  projectId: "add2num-dba83",
  databaseURL:
    "https://add2num-dba83-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "add2num-dba83.appspot.com",
  messagingSenderId: "651938710628",
  appId: "1:651938710628:web:959f99dbfbdb56b438cb71",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default database
