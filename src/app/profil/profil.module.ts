import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilPage } from './profil.page';

import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';


const routes: Routes = [
  {
    path: '',
    component: ProfilPage
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
    ProfilPage
  ]
})
export class ProfilPageModule {}
