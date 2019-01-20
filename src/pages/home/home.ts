import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";

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

  constructor(private http : HttpClient ) {

  }
  ngOnInit () {
    this.http.get('./assets/test.json').subscribe( res =>{ this.picData = res;  console.log(this.picData);});

  }

}
