import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  selectedImage: any = null;
  url: string = "service";
  private basePath = '/';
  filePath: string;
  storageRef: AngularFireStorageReference

  constructor(private storage: AngularFireStorage) { }

  save(){
    return this.storage.upload(this.filePath, this.selectedImage);
  }

  setImage(image: any) {
    this.selectedImage = image;
    this.filePath = `${this.basePath}/${this.selectedImage.name}`;
    this.storageRef = this.storage.ref(this.filePath);
  }

}
