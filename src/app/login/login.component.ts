import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  message: string = ""

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logIn(){
    this.loginService.signIn(this.email, this.password).then(res =>{
      this.router.navigate(['noticias']);
      this.message = "entrou"
    }).catch(err => {
      this.message = "Login ou senha incorreto"
    });
  }

  logOff(){
    this.loginService.signOut();
  }

}
