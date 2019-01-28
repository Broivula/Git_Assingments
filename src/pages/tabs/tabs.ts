import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginRegisterPage } from "../login-register/login-register";
import { LogoutPage } from "../logout/logout";
import { MediaProvider} from "../../providers/media/media";

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  loginRegisterRoot = LoginRegisterPage;
  logoutRoot = LogoutPage;
  public loginName = null;


  constructor(public navCtrl: NavController, public media : MediaProvider) {}

  checkIfLoggedIn() {
    console.log('test');
    this.loginName = localStorage.firstname;
    console.log('user logged in: ' + this.loginName);

  }

  ionViewDidLoad (){
    this.checkIfLoggedIn();
  }

}



