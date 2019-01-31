import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from "../../providers/media/media";
import { IPic, IUserInfo } from "../../interfaces/pic";
import {ProfilePage} from "../../pages/profile/profile";

/**
 * Generated class for the ProfilePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'profilepipe',
})
export class ProfilePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */


  constructor(private mediaProvider: MediaProvider, private profile : ProfilePage) {
  }

   async transform(token: string, ...args) {
    /*
    return new Promise((resolve, reject) => {
        this.mediaProvider.getFilesByTag('profile').subscribe( (fileTagList: IPic[] )=> {
          this.mediaProvider.getInformationOfCurrentUser(token).subscribe( (userInfo: IUserInfo)=> {
          this.profile.cachedUserInfo.file_name = fileTagList
            .filter( entry => entry.user_id == userInfo
              .user_id)
            .map(userInfo => userInfo.filename);
          this.profile.cachedUserInfo.file_id = fileTagList.filter(entry => entry.user_id == userInfo.user_id).map( fileTagList => fileTagList.file_id);
            this.profile.cachedUserInfo.name = userInfo.full_name;
            this.profile.cachedUserInfo.email = userInfo.email;
            console.log(this.profile.cachedUserInfo.file_name[0]);
           resolve(this.profile.cachedUserInfo.file_id);

        })
      })
  })*/}
}
