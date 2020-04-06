import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service'
import { Noticia } from '../model/noticias';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noticiasService: NoticiaService) { }

  noticias: Noticia[];

  ngOnInit() {
    this.getNoticias()
  }

  getNoticias(): void{
    this.noticiasService.getNoticias()
      .subscribe(noticias =>{
        this.noticias = noticias.slice(0, 5)
      });
  }

}
