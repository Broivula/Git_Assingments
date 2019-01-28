import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'
import { IPic } from '../../interfaces/pic'
import { MediaProvider} from "../../providers/media/media";
import { Observable } from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  picArray: Observable<IPic[]>;
  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(
    private http : HttpClient,
    private media : MediaProvider
  ) {}



  getAllFiles () {
    this.picArray = this.media.getAllMedia();
  }

  ionViewDidLoad () {
    this.getAllFiles();
  }

}
