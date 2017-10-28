import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http} from '@angular/http';
import { Camera } from 'ionic-native';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  public base64Image: string;
  constructor(public navCtrl: NavController,private http : Http, public toastCtrl: ToastController)
   {
     
  }
     
  ionViewDidLoad() {
    console.log('Hello Camera Page');
                    }
  public path;
  public displayPhotoMenu:boolean;
  /**
  *  Open the camera device
  */
  public openCamera():void{
 
    let option = {
      allowEdit: true,
      quality: 100,
      sourceType:Camera.PictureSourceType.CAMERA,
      destinationType:Camera.DestinationType.NATIVE_URI,  /*DATA_URL to upload */
      correctOrientation:true,
      saveToPhotoAlbum:true
    };
 
    Camera.getPicture(option).then((path) => {
      this.path = path;
      this.displayPhotoMenu = true;
   /*   this.makeFileRequest('http://192.168.1.12:8080/UploadPhoto/Upload',[], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
*/
              });
    


  }

  /**
  *  Open the galery device
  */
  public openGalerie():void{
 
    let option = {        
      allowEdit: true,
      sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType:Camera.DestinationType.NATIVE_URI,
      correctOrientation:true,
      saveToPhotoAlbum:true
    };
 
    Camera.getPicture(option).then((path) => {
      this.path = path;
      this.displayPhotoMenu = true;
    });
  }   
public uploadPhoto() {


}
 

public presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
} 
  public makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("file", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
}
}

