import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IzinRoutingModule } from './izin-routing.module';
import { PersonelListComponent } from './personel-list/personel-list.component';


@NgModule({
  declarations: [
    PersonelListComponent
  ],
  imports: [
    CommonModule,
    IzinRoutingModule
  ]
})
export class IzinModule { }
