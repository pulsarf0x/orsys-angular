import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { SharedModule } from '../../shared.module';

/**
 * Component connected to notification management functionnality
 * Such components depend on :
 * - NotificationService
 */
@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
