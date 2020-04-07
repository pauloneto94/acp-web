import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticias';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private firestore: AngularFirestore) { }

  getNoticias(){
    return this.firestore.collection('news').snapshotChanges();
  }

  getNoticia(id: string){
    return this.firestore.collection('news').doc(id).snapshotChanges();
  }

}
