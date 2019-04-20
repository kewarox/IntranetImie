import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrombinoscopePage } from './trombinoscope.page';

import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { RechercheProfilComponent } from '../recherche-profil/recherche-profil.component';

const routes: Routes = [
  {
    path: '',
    component: TrombinoscopePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModulesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TrombinoscopePage,
    RechercheProfilComponent
  ]
})
export class TrombinoscopePageModule {}
