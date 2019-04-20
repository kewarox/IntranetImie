import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Etudiant } from '../models/Etudiant';
import { EtudiantService } from '../services/etudiant.service';
import { Http, Response } from '@angular/http';

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
  result : JSON;


  constructor(private DataEtudiant : EtudiantService, private http: Http) { }

  ngOnInit() {
  }

  RechercherProfil($event){

    return new Promise(resolve => {
        this.http.get('http://127.0.0.1:8000/api/etudiants/1').subscribe(data => {
          this.result = data.json();
          resolve(this.result);
          console.log(this.result);
        });
      });
      /*
    console.log("Recherche-Profil.ts : RechercherProfil()");

    this.InputRecherche = $event.target.value;

    if (this.InputRecherche != undefined)
    {
      this.ResultatRecherche = this.DataEtudiant.getEtudiant(this.InputRecherche);
      this.EventToParent.emit(this.ResultatRecherche);
      //return this.ResultatRecherche;
    }*/
  }
}
