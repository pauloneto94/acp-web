import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component'
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { BeneficioDashboardComponent } from './beneficio-dashboard/beneficio-dashboard.component';
import { BeneficioDetailComponent } from './beneficio-detail/beneficio-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service'
 

const routes: Routes = [
  { path: '', redirectTo: '/noticias', pathMatch: 'full' },
  { path: 'noticias', component: NoticiasComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'noticia/:id', component: NoticiaDetailComponent, canActivate: [AuthGuardService] },
  { path: 'beneficios', component: BeneficiosComponent, canActivate: [AuthGuardService] },
  { path: 'novoBeneficio', component: BeneficioDashboardComponent, canActivate: [AuthGuardService] },
  { path: 'beneficio/:id', component: BeneficioDetailComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
