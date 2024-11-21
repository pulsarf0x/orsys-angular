import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';


/**
 * Expose layouts component for view components only. 
 */
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
