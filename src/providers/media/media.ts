import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResponse, IPic, IUser } from "../../interfaces/pic";


@Injectable()
export class MediaProvider {

  public logged = false;
  public token = '';

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

  logout () {
    localStorage.setItem('token', null);
    this.logged = false;
  }

  login (loginObject){
    return this.http.post<ILoginResponse>(this.apiUrl + '/login', loginObject);
  }

  checkIfUserExists (loginObject) {
    this.http.get(this.apiUrl + '/users/username/' + loginObject.firstname, loginObject).subscribe( res => {
      console.log(res);
    })
  }
}
