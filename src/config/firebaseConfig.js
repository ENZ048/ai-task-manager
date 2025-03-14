// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0JhiOuqfNRWtt8zStGLW0vzN4N2JBqOM",
  authDomain: "ai-task-manager-df358.firebaseapp.com",
  projectId: "ai-task-manager-df358",
  storageBucket: "ai-task-manager-df358.firebasestorage.app",
  messagingSenderId: "1051558211517",
  appId: "1:1051558211517:web:2eee6f7e544ecc82ccecd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;