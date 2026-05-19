import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot, query, orderBy, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs-Vl6_OicI8_gZ76-B8wLw9DkE5m_R7o",
  authDomain: "oveclerfaaliyet-park.firebaseapp.com",
  projectId: "oveclerfaaliyet-park",
  storageBucket: "oveclerfaaliyet-park.appspot.com",
  messagingSenderId: "543787729606",
  appId: "1:543787729606:web:806950ec09fbe79bdfbf65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// iframe'lerin ana sayfadaki auth durumuna erişebilmesi için global yapıyoruz
window.firebaseAuthInstance = auth;
window.firebaseDbInstance = db;

export { app, auth, db, provider, collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot, query, orderBy, getDoc, setDoc, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut };
