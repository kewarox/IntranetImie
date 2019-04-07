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

  constructor() { 
  }

  getEtudiant() {
    return this.Etudiant;
  }
}
