import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/Etudiant';
import { EtudiantService } from '../services/etudiant.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  Etudiant : Etudiant;

  constructor(private DataServiceEtudiant:EtudiantService) { }

  ngOnInit() {
    //recuperation de la personne utilisant l'application
    this.Etudiant = this.DataServiceEtudiant.getEtudiant('wacquez')[0];
  }

  ionViewWillEnter(){
  }
}
