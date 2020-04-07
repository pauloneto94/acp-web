import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service'
import { Noticia } from '../model/noticias';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noticiaService: NoticiaService) { }

  noticias: Noticia[];

  ngOnInit() {
    this.getNoticias()
  }

  getNoticias(): void{
    this.noticiaService.getNoticias()
    .subscribe(actionArray =>{
      this.noticias = actionArray.map(item =>{
        const data = item.payload.doc.data() as Noticia;
        data.id = item.payload.doc.id;
        return data;
      })
    });
  }

}
