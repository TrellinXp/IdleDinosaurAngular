import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { collection, getDocs, getFirestore } from "firebase/firestore"; 
import { NgFor, NgIf } from '@angular/common';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-dinosaurs',
  imports: [NgFor, NgIf],
  templateUrl: './dinosaurs.component.html',
  styleUrl: './dinosaurs.component.scss'
})
export class DinosaursComponent {

  dinosaurs: any[] = [];

  async fetchDinosaurs(): Promise<void> {
    const db = getFirestore(firebase.app());
    const querySnapshot = await getDocs(collection(db, "dinosaurs"));
    querySnapshot.forEach((doc) => {
      this.dinosaurs.push(doc.data());
    });
    console.log("Finished fetching dinosaurs from Firestore")
    this.dinosaurs.sort((a, b) => a.name.localeCompare(b.name));  
  }

  constructor() {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    } else {
      firebase.app(); // if already initialized, use that one
      console.log("Firebase already initialized");
    }

    this.fetchDinosaurs();
    console.log("Dinosaurs component initialized");
  }
}
