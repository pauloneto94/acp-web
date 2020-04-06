import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component'


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: NoticiaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
