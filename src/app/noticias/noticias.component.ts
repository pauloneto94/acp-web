import { Component, OnInit } from '@angular/core';
import { Noticia } from '../model/noticias';
import { NoticiService, NoticiaService } from '../services/noticia.service'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiaService: NoticiaService) { }

  noticias: Noticia[];

  noticiaSelecionada: Noticia;

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias(): void{
    this.noticiaService.getNoticias()
      .subscribe(noticias =>{
        this.noticias = noticias
      });
  }

  onSelect(noticia: Noticia): void{
    this.noticiaSelecionada = noticia;
  }

}
