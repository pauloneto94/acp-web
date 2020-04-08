import { Component, OnInit } from '@angular/core';
import { Beneficios } from '../model/beneficios';
import { BeneficioService } from '../services/beneficio.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-beneficio-detail',
  templateUrl: './beneficio-detail.component.html',
  styleUrls: ['./beneficio-detail.component.css']
})
export class BeneficioDetailComponent implements OnInit {

  beneficio: Beneficios //= {id: "", name: "teste", description: "teste", addr: "teste", image: "teste", tel: "teste", cat: ""};
  items = ['Bares e Restaurantes', 'Beleza e Estética', 'Saúde e Bem Estar', 'Educação e Idiomas', 'Viagens', 'Outros'];

  categories = {"BR":'Bares e Restaurantes',
                "BE": 'Beleza e Estética',
                "SB": 'Saúde e Bem Estar',
                "EI": 'Educação e Idiomas',
                "V":'Viagens',
                "O": 'Outros'};

  constructor(
    private beneficioService: BeneficioService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getBeneficio();
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.beneficioService.updateNew(id, this.beneficio);
  }

  getBeneficio(): void{
      const id = this.route.snapshot.paramMap.get('id');
      this.beneficioService.getBeneficio(id)
        .subscribe(noticia =>{
          this.beneficio = noticia.payload.data() as Beneficios;
          this.beneficio.id = noticia.payload.id
          this.beneficio.cat = this.categories[this.beneficio.cat]
        });
  }

  delete(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.beneficioService.deleteBeneficio(id);
  }

  goBack(): void {
    this.location.back();
  }

}
