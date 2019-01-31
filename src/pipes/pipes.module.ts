import { NgModule } from '@angular/core';
import { ThumbnailPipe } from './thumbnail/thumbnail';
import { ProfilePipe } from './profilepipe/profilepipe';
@NgModule({
	declarations: [ThumbnailPipe,
    ProfilePipe],
	imports: [],
	exports: [ThumbnailPipe,
    ProfilePipe]

})
export class PipesModule {}
