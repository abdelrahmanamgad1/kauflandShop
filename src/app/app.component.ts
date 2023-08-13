import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: '',
  },
})
export class AppComponent {}

// component or directive selectors follow CSS selectors

// 1- custom html element like div
// 2- channel to pass data from model to view
// 3- track user interactions