import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    IonicModule
  ]
})
export class SharedModulesModule { }
