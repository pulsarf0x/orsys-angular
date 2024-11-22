import { Component, Inject } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  constructor(
    //@Inject(NotificationService) public notifcationService: NotificationService
    public notifcationService: NotificationService
  ) {}

}
