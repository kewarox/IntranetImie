import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CloudPage } from './cloud.page';

import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';


const routes: Routes = [
  {
    path: '',
    component: CloudPage
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
  declarations: [CloudPage]
})
export class CloudPageModule {}
