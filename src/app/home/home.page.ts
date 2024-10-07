import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  openInstagram() {
    window.open('https://www.instagram.com/arraialdocabocaribebrasileiro/', '_blank');
  }
}
