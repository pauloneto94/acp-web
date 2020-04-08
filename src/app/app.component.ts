import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AFACP';
  isLoggedIn: boolean;

  constructor(private server: LoginService, private router: Router){
    this.server.logged.asObservable().subscribe(res => this.isLoggedIn = res);
  }

  logOff(){
    this.server.signOut()
  }
}
