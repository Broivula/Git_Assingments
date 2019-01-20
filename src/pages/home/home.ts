import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'

class Pic {
  constructor(
    public title: string,
    public details: string,
    public thumbnail: string,
    public original: string,
  ) {
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = 'Kikkel';
  picData : Object;
  photos : Object;

  constructor(private http : HttpClient ) {

  }
  ngOnInit () {
    this.http.get('http://media.mw.metropolia.fi/wbma/media?start=10&limit=10')
      .toPromise().then( res => {
      this.picData = res;
    //  console.log(this.picData);
      for( let entry in this.picData)
      {
        this.picData[entry].filename = ('http://media.mw.metropolia.fi/wbma/uploads/' + this.picData[entry].filename);
      }

    })

  }

}
