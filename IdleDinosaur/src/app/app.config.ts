import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import {
  Firestore,
  initializeFirestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';
import { environment } from '../environments/environment';

//const firebase = initializeApp(environment.firebase);
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "idle-dinosaur-angular", appId: "1:732585017361:web:ecd596390717e4963931b0", storageBucket: "idle-dinosaur-angular.firebasestorage.app", apiKey: "AIzaSyAR7WuC11Sm5Hp8bS3C71rqBR2s6qF8u-M", authDomain: "idle-dinosaur-angular.firebaseapp.com", messagingSenderId: "732585017361", measurementId: "G-1SZQ17VPPJ" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions())]
};
