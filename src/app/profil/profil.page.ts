import { Component, OnInit, Input } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service'
import { Etudiant } from '../models/Etudiant';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  AllEtudiants : Etudiant[];
  inputSelect : string;
  ListeFormation = [];

  constructor(private DataEtudiant:EtudiantService) {
    console.log("****START : Consultation de la page profil****");

   }

   RechercheProfilEffectue($event) {
     console.log("************************************");
     console.log("****COMPOSANT : profil.page.ts ****");
     console.log("****METHODE : RechercheProfilEffectue($event)****");
     console.log("Description : Changement de la liste des etudiants pour maj page");
     console.log("----Resultat de recherche depuis le composant rechercheProfil----");
     console.log($event);
     console.log("changement de l'affichage en cours");
     this.AllEtudiants = $event;
  }

  ngOnInit() {
     this.AllEtudiants = this.DataEtudiant.getEtudiantsFormation("Dev03");
     this.ListeFormation = this.DataEtudiant.getListeFormation();
  }

  AfficherProfil() {
    console.log("Affichage du profil selectionné");
    

  }

  onSelectChange($event){
    this.inputSelect = $event.target.value;

    if (this.inputSelect != undefined)
    {
      this.AllEtudiants = this.DataEtudiant.getEtudiantsFormation(this.inputSelect);      
    }

  }

}
