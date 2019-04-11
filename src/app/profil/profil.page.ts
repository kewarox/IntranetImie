import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
     this.AllEtudiants = this.DataEtudiant.getEtudiantsFormation("dev03");
     this.ListeFormation = this.DataEtudiant.getListeFormation();
  }

  AfficherProfil() {
    console.log("It's Boolshit");
  }

  onSelectChange(inputSelect){
    console.log("Changement de la promotion detecté");
   // console.log("event");
   // console.log(inputSelect.target.value);
   // console.log(typeof(inputSelect.target.value));
    this.inputSelect = inputSelect.target.value;
    console.log(this.inputSelect);
    //this.DataEtudiant.getEtudiantsFormation(this.inputSelect);

  }

}
