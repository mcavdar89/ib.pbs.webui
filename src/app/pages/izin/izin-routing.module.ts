import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'personel/list',
    component: PersonelListComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IzinRoutingModule { }
