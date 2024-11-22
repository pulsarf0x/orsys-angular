import { Component } from '@angular/core';
import { NotificationService } from '../../features/notification/services/notification.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.scss'
})
export class ViewHomeComponent {
  constructor(
    public notifcationService: NotificationService
  ) {

  }

  notify() {
    this.notifcationService.execute({
      action: 'send',
      data: { label: 'Notified from home page', level: 'HIGH'}
    })
  }

  ngOnDestroy() {
    console.log('Leaving Page Home')
  }
}
