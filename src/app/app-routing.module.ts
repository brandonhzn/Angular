import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiasComponent }      from './guias/guias.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { GuiaDetailComponent }  from './guia-detail/guia-detail.component';
const routes: Routes = [
  { path: 'detail/:id', component: GuiaDetailComponent },
  { path: 'guias', component: GuiasComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
