import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// your config
const firebaseConfig = {
  apiKey: "AIzaSyBt3nU7vshTweR_jl3jkw1spDY2whd7pU0",
  authDomain: "tbzf-c2c2d.firebaseapp.com",
  projectId: "tbzf-c2c2d",
  storageBucket: "tbzf-c2c2d.firebasestorage.app",
  messagingSenderId: "400672073191",
  appId: "1:400672073191:web:d7be4489089339dc208942"
};

// init firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// form
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      createdAt: new Date()
    });

    alert("Message sent!");
    form.reset();

  } catch (err) {
    console.log(err);
    alert("Error sending message");
  }
});