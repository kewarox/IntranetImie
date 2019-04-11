import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/connexion',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'profil', 
    loadChildren: './profil/profil.module#ProfilPageModule' 
  },
  { path: 'forum',
    loadChildren: './forum/forum.module#ForumPageModule' 
  },
  { 
    path: 'planning', 
    loadChildren: './planning/planning.module#PlanningPageModule' 
  },
  { 
    path: 'cloud', 
    loadChildren: './cloud/cloud.module#CloudPageModule' 
  },
  { path: 'bde',
    loadChildren: './bde/bde.module#BdePageModule' 
  },
  { path: 'bde', loadChildren: './bde/bde.module#BdePageModule' },
  { path: 'planning', loadChildren: './planning/planning.module#PlanningPageModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
