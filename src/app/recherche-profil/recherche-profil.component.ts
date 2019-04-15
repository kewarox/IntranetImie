import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Etudiant } from '../models/Etudiant';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-recherche-profil',
  templateUrl: './recherche-profil.component.html',
  styleUrls: ['./recherche-profil.component.scss'],
})
export class RechercheProfilComponent implements OnInit {

  @Output() EventToParent  = new EventEmitter<any>();
  
  ResultatRecherche : Etudiant[];
  message : string = "Hello world !";
  InputRecherche : string;
  $event : any;


  constructor(private DataEtudiant : EtudiantService) { }

  ngOnInit() {}

  RechercherProfil($event){
    console.log("Recherche-Profil.ts : RechercherProfil()");
    this.InputRecherche = $event.target.value;

    if (this.InputRecherche != undefined)
    {
      this.ResultatRecherche = this.DataEtudiant.getEtudiant(this.InputRecherche);
      this.EventToParent.emit(this.ResultatRecherche);
      //return this.ResultatRecherche;
    }
  }
}
