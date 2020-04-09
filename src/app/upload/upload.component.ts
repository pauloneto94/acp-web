import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirestorageService } from '../services/firestorage.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  url: string;
  private basePath = '/';
  
  constructor(private firestorageService: FirestorageService) { }

  ngOnInit() {
  }

  showPreview(event: any) {
    this.firestorageService.setImage(event.target.files[0])
  }

  save() { 
    this.firestorageService.save().snapshotChanges().pipe(
      finalize(() => {
        this.firestorageService.storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          this.url = downloadURL;
        });
      })
    ).subscribe();
  }

}
