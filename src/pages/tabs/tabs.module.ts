import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
@NgModule({
  declarations: [TabsPage],
  exports: [TabsPage],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ]
})
export class TabsPageModule {

}
