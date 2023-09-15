import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authCanMatch, authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'main',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
    canMatch: [authCanMatch],
    //canActivate: [authGuard]
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
