import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<firebase.User>
  userData: firebase.User;
  redirectUrl: string;
  isLoggedIn: boolean;
  logged = new BehaviorSubject<boolean>(false);

  constructor(private auth: AngularFireAuth, private router: Router) { 
    this.isLoggedIn = false;
    this.user = auth.authState
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userData = user;
          console.log(this.userData);
          this.isLoggedIn = true;
          this.logged.next(true);
          if(this.redirectUrl) {
            this.router.navigate([this.redirectUrl]);
          }
        }
        else {
          this.userData = null;
          this.isLoggedIn = false;
          this.logged.next(false);
        }
      }
    );
  }

  signIn(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    this.auth.signOut().then((res) => {
      this.router.navigate(['/login']);
      this.isLoggedIn = false;
      this.logged.next(false);
    });
  }
}
