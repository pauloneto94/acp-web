import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../services/beneficio.service';
import { Beneficios } from '../model/beneficios';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {

  cat: string = 'Bares e Restaurantes';
  beneficios: Beneficios[];

  

  items = ['Bares e Restaurantes', 'Beleza e Estética', 'Saúde e Bem Estar', 'Educação e Idiomas', 'Viagens', 'Outros'];              

  constructor(private beneficioService: BeneficioService) { }

  ngOnInit() {
    this.getBeneficios()
  }

  getBeneficios(){
    this.beneficioService.getBeneficios(this.cat)
      .subscribe(actionArray =>{
        this.beneficios = actionArray.map(item =>{
          const data = item.payload.doc.data() as Beneficios;
          data.id = item.payload.doc.id;
          return data;
        })
      });
  }

  newSearch(){
    this.getBeneficios()
  }

}
