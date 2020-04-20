import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../services/beneficio.service';
import { Beneficios } from '../model/beneficios';
import { FirestorageService } from '../services/firestorage.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-beneficio-dashboard',
  templateUrl: './beneficio-dashboard.component.html',
  styleUrls: ['./beneficio-dashboard.component.css']
})
export class BeneficioDashboardComponent implements OnInit {

  beneficio: Beneficios;

  items = ['Bares e Restaurantes', 'Beleza e Estética', 'Saúde e Bem Estar', 'Educação e Idiomas', 'Viagens', 'Outros']; 

  constructor(private firestorageService: FirestorageService ,private beneficioService: BeneficioService) { }

  ngOnInit() {
    this.beneficio = {id: "", name: "", description: "", addr: "", image: "", email: "", cat: "", tel: ""};
  }

  onSubmit(){
    this.beneficioService.addBeneficio(this.beneficio);
  }

  showPreview(event: any) {
    this.firestorageService.setImage(event.target.files[0])
    this.firestorageService.save().snapshotChanges().pipe(
      finalize(() => {
        this.firestorageService.storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          this.beneficio.image = downloadURL;
        });
      })
    ).subscribe();
  }

}
