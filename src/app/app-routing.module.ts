import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: '', pathMatch:'full',redirectTo:'principal'},
  { path: '**', pathMatch:'full',redirectTo:'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
