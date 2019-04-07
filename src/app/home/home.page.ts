import { Component } from '@angular/core';
import { Etudiant } from '../models/Etudiant';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Etudiant : Etudiant;

  constructor(private DataServiceEtudiant:EtudiantService) { 
  }

  ionViewWillEnter(){
    this.Etudiant = this.DataServiceEtudiant.getEtudiant();
  }
}
