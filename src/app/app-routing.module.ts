import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component'
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { BeneficioDashboardComponent } from './beneficio-dashboard/beneficio-dashboard.component';
import { BeneficioDetailComponent } from './beneficio-detail/beneficio-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'noticia/:id', component: NoticiaDetailComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'novoBeneficio', component: BeneficioDashboardComponent },
  { path: 'beneficio/:id', component: BeneficioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
