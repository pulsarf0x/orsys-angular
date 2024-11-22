import { Injectable } from '@angular/core';
import { ReactiveService } from '../../../core/interfaces/reactive-service';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Notification {
  label: string
  level: 'HIGH' | 'MEDIUM' | 'LOW'
}

export interface NotificationCommand {
  action: 'send'
  data: Notification | null
}


/**
 * Notification
 * label - stirng
 * level - HIGH MEDIUM LOW
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService implements ReactiveService<Notification | null, NotificationCommand> {

  private _data = new BehaviorSubject<Notification | null>(null);
  data$ = this._data.asObservable()

  execute(command: NotificationCommand): void {
    if (command.action !== 'send') return
    this._data.next(command.data)
    setTimeout(() => {
        this._data.next(null)
    }, 3000)
  }
}
