import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelListComponent } from './personel-list/personel-list.component';

const routes: Routes = [
  {path:'personel/list', component: PersonelListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IzinRoutingModule { }
