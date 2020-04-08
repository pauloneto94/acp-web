import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../services/beneficio.service';
import { Beneficios } from '../model/beneficios';

@Component({
  selector: 'app-beneficio-dashboard',
  templateUrl: './beneficio-dashboard.component.html',
  styleUrls: ['./beneficio-dashboard.component.css']
})
export class BeneficioDashboardComponent implements OnInit {

  beneficio: Beneficios;

  items = ['Bares e Restaurantes', 'Beleza e Estética', 'Saúde e Bem Estar', 'Educação e Idiomas', 'Viagens', 'Outros']; 

  constructor(private beneficioService: BeneficioService) { }

  ngOnInit() {
    this.beneficio = {id: "", name: "", description: "", addr: "", image: "", tel: "", cat: ""};
  }

  onSubmit(){
    this.beneficioService.addBeneficio(this.beneficio);
  }

}
