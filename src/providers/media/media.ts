import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResponse, IPic, IUser, IUserInfo } from "../../interfaces/pic";


@Injectable()
export class MediaProvider {

  public logged = false;
  public token = '';
  private httpsOptions = {};
  public cachedUserInfo = {
    file_name: null,
    name : null,
    email: null,
    file_id: null,
  };

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

  getInformationOfCurrentUser (token) {
    this.httpsOptions = {
      headers: {
        "x-access-token": token
      }
    };
    return this.http.get(this.apiUrl+ '/users/user', this.httpsOptions);
  }
  getFilesByTag(tag) {
    //first have to request a list of files by tag 'profile'
    //then take from there with our profile id
    //bla bla lets try
    return this.http.get(this.apiUrl + '/tags/' + tag)
  }

  getProfileImageWithUserID (id) {

  }

  getProfilePageInformation () {
    this.getFilesByTag('profile').subscribe( (fileTagList: IPic[] )=> {
      this.getInformationOfCurrentUser(this.token).subscribe( (userInfo: IUserInfo)=> {
        this.cachedUserInfo.file_name = fileTagList
          .filter(entry => entry.user_id == userInfo
            .user_id)
          .map(userInfo => userInfo.filename);
        this.cachedUserInfo.file_id = fileTagList.filter(entry => entry.user_id == userInfo.user_id).map(fileTagList => fileTagList.file_id);
        this.cachedUserInfo.name = userInfo.full_name;
        this.cachedUserInfo.email = userInfo.email;
        console.log(this.cachedUserInfo);
      })
    })
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
