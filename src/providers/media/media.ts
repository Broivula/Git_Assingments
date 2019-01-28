import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPic } from "../../interfaces/pic";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  private apiUrl : string = 'http://media.mw.metropolia.fi/wbma';
  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  getAllMedia () {
    return this.http.get<IPic[]>(this.apiUrl+ '/media');
  }

  getSingleMedia (id) {
    return this.http.get<IPic>(this.apiUrl+ '/media/' + id);
  }

  register (){

  }

  login (loginObject){
    this.http.post(this.apiUrl + '/login', loginObject).subscribe(res => {
      console.log(res);
    })

  }

  checkIfUserExists (loginObject) {
    this.http.get(this.apiUrl + '/users/username/' + loginObject.firstname, loginObject).subscribe( res => {
      console.log(res);
    })
  }
}
