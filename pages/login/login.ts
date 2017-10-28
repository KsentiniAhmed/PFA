import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
//import {UploadService} from '../../services/upload.service';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    // static get parameters(){
      //  return [[NavController]];  
    //}
      private user : FormGroup;
  
  constructor( private formBuilder: FormBuilder ) {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
  }
  logForm(){
    console.log(this.user.value)
  }
  

    onSubmit(){
      console.log('connecter avec succeé');

      // var upload = {
       //}
       
       // Add Workout 
       /*this.uploadService.addImage(upload).subscribe(data => {
           this.result = data
       },
       err => console.log(err),
       () => console.log('Image Added'));
       */
      // this.NavController.setRoot(LoginPage);
    }
}