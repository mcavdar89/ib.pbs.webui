import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IzinRoutingModule } from './izin-routing.module';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { DialogModule } from 'primeng/dialog';
import { PersonelFormComponent } from './personel-form/personel-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonelForm2Component } from './personel-form2/personel-form2.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    PersonelListComponent,
    PersonelFormComponent,
    PersonelForm2Component
  ],
  imports: [
    CommonModule,
    FormsModule,

    IzinRoutingModule,
    DialogModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService]
})
export class IzinModule { }
