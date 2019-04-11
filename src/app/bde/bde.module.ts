import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BdePage } from './bde.page';

import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';


const routes: Routes = [
  {
    path: '',
    component: BdePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModulesModule
  ],
  declarations: [BdePage]
})
export class BdePageModule {}
