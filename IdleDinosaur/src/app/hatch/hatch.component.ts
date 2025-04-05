import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hatch',
  imports: [],
  templateUrl: './hatch.component.html',
  styleUrl: './hatch.component.scss'
})
export class HatchComponent {
  display: any;

  constructor() {

  }

  timer(minute: number) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        this.hatchEgg();
        clearInterval(timer);
      }
    }, 1000);
  }

  startTimer() {
    this.timer(1);
  }

  hatchEgg() {
  
  }
}
