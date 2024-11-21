import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';



@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutDefaultComponent
  ]
})
export class LayoutModule { }
