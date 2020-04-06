import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../model/noticias'

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})
export class NoticiaDetailComponent implements OnInit {

  constructor() { }

  @Input() noticia: Noticia;

  ngOnInit() {
  }

}
