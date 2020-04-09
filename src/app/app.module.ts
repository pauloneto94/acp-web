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
import { BeneficioDashboardComponent } from './beneficio-dashboard/beneficio-dashboard.component';
import { BeneficioService } from './services/beneficio.service';
import { BeneficioDetailComponent } from './beneficio-detail/beneficio-detail.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UploadComponent } from './upload/upload.component';
import { LoginService } from './services/login.service';
import { AngularFireStorageModule } from '@angular/fire/storage';

 
@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    NoticiaDetailComponent,
    DashboardComponent,
    BeneficiosComponent,
    BeneficioDashboardComponent,
    BeneficioDetailComponent,
    LoginComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [NoticiaService, BeneficioService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
