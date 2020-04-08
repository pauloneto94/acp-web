import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<firebase.User>
  userData: firebase.User;


  constructor(private auth: AngularFireAuth, private router: Router) { 
    this.user = auth.authState
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userData = user;
          console.log(this.userData);
        }
        else {
          this.userData = null;
        }
      }
    );
  }

  signIn(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    this.auth.signOut().then((res) => this.router.navigate(['/']));
  }

  isLoggedIn() {
    if (this.userData == null ) {
      return false;
    } else {
      return true;
    }
  }

}
