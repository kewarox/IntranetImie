import { Component } from '@angular/core';
import { Etudiant } from '../models/Etudiant';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Etudiant : Etudiant;

  constructor() { 
  }

}
