import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticias';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  formData: Noticia;

  constructor(private firestore: AngularFirestore) { }

  getNoticias(){
    return this.firestore.collection('news', ref => ref.orderBy('pos', 'desc')).snapshotChanges();
  }

  getNoticia(id: string){
    return this.firestore.collection('news').doc(id).snapshotChanges();
  }

}
