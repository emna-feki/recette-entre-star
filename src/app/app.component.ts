import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recettes-entre-stars';

  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBU8griFbS7-OHQpeJkxKpBr07pZIIxsOY',
      authDomain: 'recettes-des-stars.firebaseapp.com',
      databaseURL: 'https://recettes-des-stars.firebaseio.com',
      projectId: 'recettes-des-stars',
      storageBucket: 'recettes-des-stars.appspot.com',
      messagingSenderId: '38185191836',
      appId: '1:38185191836:web:2a91b27e17d107759e6059',
      measurementId: 'G-QG8M6MGL03'
    });
  }
}
