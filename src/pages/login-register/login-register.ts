import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MediaProvider} from "../../providers/media/media";
/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {

  public form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formbuilder: FormBuilder,
    public media: MediaProvider,
    ) {
    this.form = this.formbuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.minLength(8)]
    });
  }


  callLogin () {
    //make the call to providers media login with the user info
   // this.media.login();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

}
