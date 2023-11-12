import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UploadService } from 'src/app/services/uploadFiles.service';


@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent {


private fileTmp:any;
pathimg:string=''


  constructor(private _uploadService: UploadService){ //TODO estoy inyect

  }

  getFile($event: any): void {
    //TODO esto captura el archivo!
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

  sendFile():void{

    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);


    console.log('body :',body)

    this._uploadService.sendPost(body).subscribe(res =>{
        console.log(res)
        this.pathimg = "http://localhost:5000/imagenes/"+res.archivo
    })

  }

}


