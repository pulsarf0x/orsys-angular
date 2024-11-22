import { Injectable } from '@angular/core';
import { ReactiveService } from '../interfaces/reactive-service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface EventData {
  label: string
}
export interface EventCommand {
  action: 'publish'
  data: EventData
}

@Injectable()
export class EventService implements ReactiveService<EventData[], EventCommand> {

  constructor() {
    
  }

  private _data = new BehaviorSubject<EventData[]>([])
  data$ = this._data.asObservable()
  
  execute(command: EventCommand): void {
    if (command.action !== 'publish' || !command.data) return

    this._data.next([command.data, ...this._data.value])
  }
}
