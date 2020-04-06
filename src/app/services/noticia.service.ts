import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticias: Noticia[] = [
    {id: 1, title: "ACP 1"},
    {id: 2, title: "ACP 2"},
    {id: 3, title: "ACP 3"},
    {id: 4, title: "ACP 4"},
  ]

  constructor() { }

  getNoticias(): Noticia[]{
    return this.noticias;
  }
}
