import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IzinRoutingModule } from './izin-routing.module';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { DialogModule } from 'primeng/dialog';
import { PersonelFormComponent } from './personel-form/personel-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonelListComponent,
    PersonelFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    IzinRoutingModule,
    DialogModule
  ]
})
export class IzinModule { }
