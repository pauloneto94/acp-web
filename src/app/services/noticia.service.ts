import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticias';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { getLocaleDayPeriods } from '@angular/common';
import { getParseErrors } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  pos: number;
  noticia: Noticia;

  constructor(private firestore: AngularFirestore) { }

  getNoticias(){
    return this.firestore.collection('news', ref => ref.orderBy('pos', 'desc')).snapshotChanges();
  }

  getNoticia(id: string){
    return this.firestore.collection('news').doc(id).snapshotChanges();
  }

  addNew(noticia: Noticia) {
    this.firestore.collection('test').add({
      title: noticia.title,
      news: noticia.news,
      body: noticia.body,
      url: noticia.url,
      image: noticia.image,
      pos: this.getPos()
    });
  }

  getPos(): number{
    this.firestore.collection('news', ref => ref.orderBy('pos', 'desc').limit(1)).snapshotChanges()
    .subscribe(actionArray =>{
      actionArray.map(item =>{
        this.noticia = item.payload.doc.data() as Noticia;
      });
    });
    return this.noticia.pos + 1;

  }

}
