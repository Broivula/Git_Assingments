import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from "../../providers/media/media";
import { ProfilePipe} from "../../pipes/profilepipe/profilepipe";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';


  constructor(public navCtrl: NavController, public navParams: NavParams, public media: MediaProvider) {
  }

  logout () {
    this.media.logout();
    this.navCtrl.parent.select(0);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
