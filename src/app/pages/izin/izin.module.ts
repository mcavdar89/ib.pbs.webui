import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IzinRoutingModule } from './izin-routing.module';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { DialogModule } from 'primeng/dialog';
import { PersonelFormComponent } from './personel-form/personel-form.component';

@NgModule({
  declarations: [
    PersonelListComponent,
    PersonelFormComponent
  ],
  imports: [
    CommonModule,
    IzinRoutingModule,
    DialogModule
  ]
})
export class IzinModule { }
