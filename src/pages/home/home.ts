import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'
import { IPic } from '../../interfaces/pic'
import { MediaProvider} from "../../providers/media/media";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  picArray: IPic[];
  title = 'Kikkel';
  picData : Object;
  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(
    private http : HttpClient,
    private media : MediaProvider
  ) {}



  getAllFiles () {
    this.media.getAllMedia().subscribe( (data: IPic[]) => {
      this.picData = data;
      this.picArray = data.map((pic : IPic) => {
        this.media.getSingleMedia(pic.file_id).subscribe( (singlePic : IPic) => {
         pic.thumbnails =   {
            160 : singlePic.thumbnails["w160"],
            320 : singlePic.thumbnails["w320"],
            640 : singlePic.thumbnails["w640"],
          };
          }
        );
        return pic
      })
  })};


  ionViewDidLoad () {
    this.getAllFiles();
    }

}
