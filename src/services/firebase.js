// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_3cDhksh35opQkjEe1ill6HENyCX32vk",
  authDomain: "task-management-a25b0.firebaseapp.com",
  projectId: "task-management-a25b0",
  storageBucket: "task-management-a25b0.firebasestorage.app",
  messagingSenderId: "902474950241",
  appId: "1:902474950241:web:d0c8e2750fa5869f26ec20",
  measurementId: "G-NLQCX1KS0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
