import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service'
import { Noticia } from '../model/noticias';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { FirestorageService } from '../services/firestorage.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noticiaService: NoticiaService, private firestorageService: FirestorageService) { }

  noticia: Noticia; 

  ngOnInit() {
    this.noticia = {id: "", title: "", news: "", url: "", image: "", pos: null, body: "body"};
  }

  onSubmit() {
    this.noticiaService.addNew(this.noticia);
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

  get diagnostic() { return JSON.stringify(this.noticia); }


}
