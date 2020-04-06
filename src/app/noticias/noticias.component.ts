import { Component, OnInit } from '@angular/core';
import { Noticia } from '../model/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  noticias: Noticia[] = [
    {id: 1, title: "ACP 1"},
    {id: 2, title: "ACP 2"},
    {id: 3, title: "ACP 3"},
    {id: 4, title: "ACP 4"},
  ]

  noticiaSelecionada: Noticia;

  ngOnInit() {
  }

  onSelect(noticia: Noticia): void{
    this.noticiaSelecionada = noticia;
  }

}
