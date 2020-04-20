import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Beneficios } from '../model/beneficios';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  categories = {'Bares e Restaurantes': "BR",
                'Beleza e Estética': "BE",
                'Saúde e Bem Estar': "SB",
                'Educação e Idiomas': "EI",
                'Viagens': "V",
                'Outros': "O"};

  constructor(private firestore: AngularFirestore) { }

  getBeneficios(cat: string){
    return this.firestore.collection('benefits', ref => ref.where('cat', '==', this.categories[cat])).snapshotChanges();
  }

  getBeneficio(id: string){
    return this.firestore.collection('benefits').doc(id).snapshotChanges();
  }

  addBeneficio(beneficio: Beneficios) {
    this.firestore.collection('benefits').add({
      name: beneficio.name,
      description: beneficio.description,
      image: beneficio.image,
      tel: beneficio.tel,
      addr: beneficio.addr,
      email: beneficio.email,
      cat: this.categories[beneficio.cat]
    });
  }

  deleteBeneficio(id: string){
    this.firestore.collection('benefits').doc(id).delete();
  }

  updateNew(id: string, beneficio: Beneficios){
    this.firestore.collection('benefits').doc(id).update({
      name: beneficio.name,
      description: beneficio.description,
      image: beneficio.image,
      tel: beneficio.tel,
      addr: beneficio.addr,
      cat: this.categories[beneficio.cat]
    });
  }

}
