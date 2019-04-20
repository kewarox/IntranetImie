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
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' },
  { path: 'trombinoscope', loadChildren: './trombinoscope/trombinoscope.module#TrombinoscopePageModule' },
  { path: 'profil/:id', loadChildren: './profil/profil.module#ProfilPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
