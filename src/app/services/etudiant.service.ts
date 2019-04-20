import { Injectable } from '@angular/core';
import { Etudiant } from '../models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  EtudiantRecherche : Etudiant;

  Etudiant : Etudiant = 
  {
    Nom : 'wacquez',
    Prenom : 'Pierre',
    Formation : 'dev03',
    Img : '../../assets/img/personas/user-sean.png',
    id : 1
  }

  ListeToutEtudiants : Etudiant[] = [
    {
      Nom : 'wacquez',
      Prenom : 'Pierre',
      Formation : 'dev03',
      Img : '../../assets/img/personas/user-sean.png',
      id : 1
    },
    {
      Nom : 'Talmant',
      Prenom : 'Rick',
      Formation : 'dev03',
      Img : '../../assets/img/personas/user-ricky.png',
      id : 2
    },
    {
      Nom : 'Cooper',
      Prenom : 'Clara',
      Formation : 'dev03',
      Img : '../../assets/img/personas/user-4.png',
      id : 3
    },
    {
      Nom:"Ditier",
      Prenom:"Jerome",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-6.png',
      id : 4
    },
    {
      Nom:"Benert",
      Prenom:"Eloise",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-7.png',
      id: 5
    },
    {
      Nom:"Zair",
      Prenom:"Fatima",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-9.png',
      id:6
    }
  ]

  EtudiantsDev02 : Etudiant[] = [
  {
    Nom: "Talmant",
    Prenom: "Rick",
    Formation: "Dev03",
    Img:'../../assets/img/personas/user-ricky.png',
    id:2
  },
  {
    Nom: "Cooper",
    Prenom: "Clara",
    Formation: "Dev03",
    Img:'../../assets/img/personas/user-4.png',
    id:3
  }
  ];

  EtudiantsDev03 : Etudiant[] =  
  [
    {
      Nom: "Wacquez",
      Prenom: "Pierre",
      Formation: "Dev03",
      Img:'../../assets/img/personas/user-sean.png',
      id:1
    },
    {
      Nom:"Ditier",
      Prenom:"Jerome",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-6.png',
      id:4
    },
    {
      Nom:"Benert",
      Prenom:"Eloise",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-7.png',
      id:5
    },
    {
      Nom:"Zair",
      Prenom:"Fatima",
      Formation:"Dev03",
      Img:'../../assets/img/personas/user-9.png',
      id:6
    }
  ];

  EtudiantItStart : Etudiant[] = 
  [
    {
      Nom:"profil1",
      Prenom:"ipsum",
      Formation:"itstart",
      Img:"../../assets/img/personas/user-5.png",
      id:7
    },
    {
      
      Nom:"profil2",
      Prenom:"test",
      Formation:"itstart",
      Img:"../../assets/img/personas/user-5.png",
      id:8
    },
    {
      
      Nom:"profil3",
      Prenom:"toto",
      Formation:"itstart",
      Img:"../../assets/img/personas/user-5.png",
      id:9
    }
  ]

  EtudiantDigistart : Etudiant[] = 
  [
    {
      Nom:"profilDigistart",
      Prenom:"prenom",
      Formation:"digistart",
      Img:"../../assets/img/personas/user-5.png",
      id:10
    },
    {
      Nom:"profildigistart",
      Prenom:"prenom",
      Formation:"digistart",
      Img:"../../assets/img/personas/user-5.png",
      id:11
    }
  ]

  EtudiantDevOps : Etudiant[] = 
  [
    {   
      Nom:"ProfilOps",
      Prenom:"prenom",
      Formation:"DevOps",
      Img:"../../assets/img/personas/user-5.png",
      id:12
    },
    {
      Nom:"ProfilOps",
      Prenom:"prenom",
      Formation:"DevOps",
      Img:"../../assets/img/personas/user-5.png",
      id:13
    }
  ]

  Formations = ['Dev02', 'Dev03', 'ItStart', 'DigiStart', 'DevOps'];

  constructor() { 
  }

  RechercheId(id:number){
    console.log("**SERVICE : Recherche de l'id demandé dans la liste des etudiants");
    
    this.ListeToutEtudiants.forEach( (element) =>  {
        if ( element.id == id )
        {
          this.EtudiantRecherche = element;
        }
    });

    return this.EtudiantRecherche;
  }

  RechercheNom(Etudiant:Etudiant,Term:string) {
    console.log("***SERVICE : Recherche du nom dans l'objet Etudiant traité ");
    console.log(Etudiant);
    return Etudiant.Nom.toLowerCase().includes(Term.toLowerCase());
  }

  getEtudiant(Term:string) {
    console.log("*********************************************");
    console.log("****SERVICE : Affichage de l'input *****");
    if (Term != undefined)
    {
      console.log(Term);
      console.log("****SERVICE : iteration de Recherche de nom depuis la liste");
      return this.ListeToutEtudiants.filter(Etudiant => this.RechercheNom(Etudiant, Term)); //.toLocaleLowerCase().includes(Term.toLocaleLowerCase);
    }
  }

  getEtudiantsFormation(formation:string){
    if (formation == "Dev03")
    {
      return this.EtudiantsDev03;
    }
    if (formation == "Dev02")
    {
      return this.EtudiantsDev02;
    }
    if (formation == "ItStart")
    {
      return this.EtudiantItStart;
    }
    if (formation == "DigiStart")
    {
      return this.EtudiantDigistart;
    }
    if (formation == "DevOps")
    {
      return this.EtudiantDevOps;
    }
  }

  getListeFormation(){
    return this.Formations;
  }
}
