import { NgModule } from '@angular/core';

import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../shared.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { LayoutModule } from "../layout/layout.module";
import { NotificationModule } from '../features/notification/notification.module';
import { MessageModule } from '../features/message/message.module';

/**
 * Expose components to be routed
 */
@NgModule({
  declarations: [
    ViewHomeComponent,
    ViewMessageComponent,
    ViewProfileComponent
  ],
  exports: [
    ViewHomeComponent,
    ViewMessageComponent,
    ViewProfileComponent
  ],
  imports: [
    SharedModule,
    ViewRoutingModule,
    LayoutModule,
    NotificationModule,
    MessageModule
]
})
export class ViewModule { }
