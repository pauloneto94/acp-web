import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../model/noticias';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NoticiaService } from '../services/noticia.service';
import { finalize } from 'rxjs/operators';
import { FirestorageService } from '../services/firestorage.service';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})
export class NoticiaDetailComponent implements OnInit {

  noticia: Noticia;

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiaService,
    private firestorageService: FirestorageService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getNoticia();
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticiaService.updateNew(id, this.noticia);
  }

  getNoticia(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.noticiaService.getNoticia(id)
      .subscribe(noticia =>{
        this.noticia = noticia.payload.data() as Noticia;
        this.noticia.id = noticia.payload.id
      });
  }

  delete(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.noticiaService.deleteNew(id);
  }

  goBack(): void {
    this.location.back();
  }

  showPreview(event: any) {
    this.firestorageService.setImage(event.target.files[0])
    this.firestorageService.save().snapshotChanges().pipe(
      finalize(() => {
        this.firestorageService.storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          this.noticia.image = downloadURL;
        });
      })
    ).subscribe();
  }

}
