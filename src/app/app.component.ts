import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      titre: 'Dashboard',
      commentaire: 'Accéder à votre tableau de bord',
      url: '/home',
      icone: '../assets/img/Imie_Ico.svg'
    },
    {
      titre: 'planning',
      commentaire: 'Accéder à votre planing et organisez-vous !',
      url: '/planning',
      icone: '../assets/img/Planning_Ico.svg'
    },
    {
      titre: "Espace de stockage",
      commentaire: 'Télécharger et partager vos cours et documents administratif !',
      url: '/cloud',
      icone: '../assets/img/Ordinateur.svg'
    },
    {
      titre: "Profil",
      commentaire: "Consultez les diffèrentes promotions et parcourez les trombinoscopes pour l'elaboration d'une équipe !",
      url: '/profil',
      icone: '../assets/img/Profil_Ico.svg'
    },
    {
      titre: "Forum",
      commentaire: "Consultez et contribuer au forum !",
      url: '/forum',
      icone: '../assets/img/Forum_Ico.svg'
    },
    {
      titre: 'Espace BDE',
      commentaire: "Tenez-vous informé et accédez aux communications du BDE",
      url: '/bde',
      icone: '../assets/img/Trombi_Ico.svg'
    },
    {
      titre:'Décollage !',
      commentaire: "se déconnecter !",
      url:"connexion",
      icone:'../assets/img/ico_fusee.PNG'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
