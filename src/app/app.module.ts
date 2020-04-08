import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from "src/environments/environment";
import { NoticiaService } from './services/noticia.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { BeneficioDetailComponent } from './beneficio-detail/beneficio-detail.component';
import { BeneficioDashboardComponent } from './beneficio-dashboard/beneficio-dashboard.component';
import { BeneficioService } from './services/beneficio.service';

 
@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    NoticiaDetailComponent,
    DashboardComponent,
    BeneficiosComponent,
    BeneficioDetailComponent,
    BeneficioDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
 	  AngularFirestoreModule,
  ],
  providers: [NoticiaService, BeneficioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
