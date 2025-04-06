import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR7WuC11Sm5Hp8bS3C71rqBR2s6qF8u-M",
  authDomain: "idle-dinosaur-angular.firebaseapp.com",
  projectId: "idle-dinosaur-angular",
  storageBucket: "idle-dinosaur-angular.firebasestorage.app",
  messagingSenderId: "732585017361",
  appId: "1:732585017361:web:ecd596390717e4963931b0",
  measurementId: "G-1SZQ17VPPJ"
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
