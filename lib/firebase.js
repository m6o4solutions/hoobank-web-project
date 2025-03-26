// import the functions needed from the SDKs needed
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHNnxQr34zZ-rAH3_NeZ7bPnVTVoEfsZE",
  authDomain: "hoobank-project.firebaseapp.com",
  projectId: "hoobank-project",
  storageBucket: "hoobank-project.firebasestorage.app",
  messagingSenderId: "498664929623",
  appId: "1:498664929623:web:b59e4dd92cfeeb84336612",
  measurementId: "G-HBD2E765WD",
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
