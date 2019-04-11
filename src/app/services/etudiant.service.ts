import { Injectable } from '@angular/core';
import { Etudiant } from '../models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {



  Etudiant : Etudiant = {
    Nom : 'wacquez',
    Prenom : 'Pierre',
    Formation : 'dev03',
    Img : '../../assets/img/personas/user-sean.png'
  }

  EtudiantsDev02 : Etudiant[] = [
  {
    Nom: "Talmant",
    Prenom: "Rick",
    Formation: "Dev03",
    Img:'../../assets/img/personas/user-ricky.png'
  },
  {
    Nom: "Cooper",
    Prenom: "Clara",
    Formation: "Dev03",
    Img:'../../assets/img/personas/user-4.png'
  }
  ];

  EtudiantsDev03 : Etudiant[] =  
  [
    {
      Nom: "Wacquez",
      Prenom: "Pierre",
      Formation: "Dev03",
      Img:'../../assets/img/personas/user-sean.png'
    },
    {
      Nom:"Ditier",
      Prenom:"Jerome",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-6.png'
    },
    {
      Nom:"Benert",
      Prenom:"Eloise",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-7.png'
    },
    {
      Nom:"Zair",
      Prenom:"Fatima",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-9.png'
    }
  ];

  EtudiantItStart : Etudiant[] = 
  [
    {
      Nom:"profil1",
      Prenom:"ipsum",
      Formation:"itstart",
      Img:"../../assets/img/personas/user-5.png"
    },
    {
      
      Nom:"profil2",
      Prenom:"test",
      Formation:"itstart",
      Img:"../../assets/img/personas/user-5.png"
    },
    {
      
      Nom:"profil3",
      Prenom:"toto",
      Formation:"itstart",
      Img:"../../assets/img/personas/user-5.png"
    }
  ]

  Promotions = ['Dev02', 'Dev03', 'ItStart', 'Digistart', 'Ops'];

  constructor() { 
  }

  getEtudiant() {
    return this.Etudiant;
  }

  getEtudiantsFormation(formation:string){
    if (formation = "Dev03")
    {
      return this.EtudiantsDev03;
    }
    if (formation = "Dev02")
    {
      return this.EtudiantsDev02;
    }
    if (formation = "ItStart")
    {
      return this.EtudiantItStart;
    }
  }

  getListeFormation(){
    return this.Promotions;
  }
}
