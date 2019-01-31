import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MediaProvider} from "../../providers/media/media";
import { ILoginResponse } from "../../interfaces/pic";
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
      username:['', Validators.required],
      password:['', Validators.minLength(8)]
    });
  }
  loginSendForm() {
    this.media.login(this.form.value).subscribe(  (res : ILoginResponse)=> {
      localStorage.setItem('token', res.token);
      this.media.token = res.token;
      this.media.logged = true;
      this.media.getProfilePageInformation();
      this.navCtrl.parent.select(0);
    })}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

}
