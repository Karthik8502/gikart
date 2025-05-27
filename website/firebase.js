// firebase.js (or place inside <script type="module"> if inline)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA1z7j1uB2_zU9t7oINcLSlz3VMqFYhY9Q",
  authDomain: "dikart-dab2c.firebaseapp.com",
  projectId: "dikart-dab2c",
  storageBucket: "dikart-dab2c.appspot.com", // ✅ corrected storage bucket
  messagingSenderId: "422234430471",
  appId: "1:422234430471:web:b612d9b85df6343108dea2",
  measurementId: "G-TBRSZVJ3QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Optional: export to use in other scripts
export { app, auth, db, storage };
