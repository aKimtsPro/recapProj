import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVoitComponent } from './components/list-voit/list-voit.component';
import { LoginComponent } from './components/login/login.component';
import { RecapBaseComponent } from './components/recap-base/recap-base.component';

const routes: Routes = [
  {
    path: 'recap-base', component: RecapBaseComponent, 
  },
  {
    path: 'list-voit', component: ListVoitComponent
  },
  {
    path: '', redirectTo: 'recap-base', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
