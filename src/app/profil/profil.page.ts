import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from '../models/Etudiant';

import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  Etudiant : Etudiant;
  nom : string;
  id : number;
  private sub: any;

  constructor(private route: ActivatedRoute, private DataEtudiant:EtudiantService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.Etudiant = this.DataEtudiant.RechercheId(this.id);
      console.log("ici");
      console.log(this.Etudiant);
   });

  }

}
