import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userData: Observable<firebase.User>

  constructor(private auth: AngularFireAuth) { 
    this.userData = auth.authState
  }

  signIn(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    this.auth.signOut();
  }
}
