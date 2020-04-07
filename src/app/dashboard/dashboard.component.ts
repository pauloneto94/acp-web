import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service'
import { Noticia } from '../model/noticias';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noticiaService: NoticiaService) { }

  noticia: Noticia; 

  ngOnInit() {
    this.noticia = {id: "", title: "", news: "", url: "", image: "", pos: null, body: "body"};
  }

  onSubmit() {
    this.noticiaService.addNew(this.noticia);
  }

  get diagnostic() { return JSON.stringify(this.noticia); }

}
