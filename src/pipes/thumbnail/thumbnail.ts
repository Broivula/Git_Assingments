import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from "../../providers/media/media";

/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'thumbnail',
//  pure: false,     uncomment for impure version
})
export class ThumbnailPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  cachedThumbnail = '';
  cachedId = null;
  constructor(private mediaProvider: MediaProvider) {

  }

  transform(id: number, ...args) {

    // impure version
    /*
    if(id !== this.cachedId)
    {
      this.cachedThumbnail = null;
      this.cachedId = id;
      this.mediaProvider.getSingleMedia(id).subscribe( res => {
           switch(args[0]){
            case 'small':
              this.cachedThumbnail = res.thumbnails["w160"];
              break;

             case 'medium':
               this.cachedThumbnail = res.thumbnails["w320"];
               break;

             case 'large':
               this.cachedThumbnail = res.thumbnails["640"];
               break;

             default:
               this.cachedThumbnail = res.thumbnails["w160"];
               break;
          }
    }
    )}
    return this.cachedThumbnail;
    */


    //pure version

    return new Promise((resolve, reject) => {
      this.mediaProvider.getSingleMedia(id).subscribe( res => {
        switch(args[0]){
          case 'small':
            resolve(res.thumbnails["w160"]);
            break;

          case 'medium':
            resolve(res.thumbnails["w320"]);
            break;

          case 'large':
            resolve(res.thumbnails["w640"]);
            break;

          default:
            resolve(res.thumbnails["w160"]);
            break;
        }
      })
    })
  }
}
