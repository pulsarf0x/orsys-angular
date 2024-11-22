import { Injectable } from '@angular/core';
import { CrudService, MethodAcceptance, UniqueData } from '../../../core/interfaces/crud-service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { NotificationService } from '../../notification/services/notification.service';

export interface Message extends UniqueData {
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService implements CrudService<Message> {

  private API = environment.API_MESSAGE

  constructor(
    private http: HttpClient,
    private notifier:NotificationService
  ) { }

  notify(label = '') {
    this.notifier.execute({action: 'send', data: {label, level: 'MEDIUM'}})
  }

  private _data = new BehaviorSubject<Message[]>([])
  data$ = this._data.asObservable();

  create(data: Omit<Message, 'id'>): Observable<MethodAcceptance> {
    if (!data) {
      return of({
        label: 'REJECTED',
        reason: 'No data provided'
      })
    }

    const subject = new Subject<MethodAcceptance>()

    this.http.post(this.API, data).subscribe(responseData => {
      this.notify('Message created')
      subject.next({
        label: 'ACCEPTED',
        reason: 'Message created'
      })
    })
    
    return subject
  }
  
  read(): Observable<MethodAcceptance> {
    this.http.get<Message[]>(this.API).subscribe(responseData => {
      this.notify('List up to date')
      this._data.next(responseData)
    })

    this.notify('List is being updated')
    return of({label: 'ACCEPTED', reason: 'List is being updated'})
  }

  update(target: Message, data: Partial<Message>): Observable<MethodAcceptance> {
    if (!target.id) return of({label: 'REJECTED', reason: 'Invalid ID'})
    if (!Object.keys(data).length) return of({label: 'REJECTED', reason: 'No specified updates'})

    const subject = new Subject<MethodAcceptance>()

    this.http.put(`${this.API}/${target.id}`, {...target, ...data}).subscribe(responseData => {
      this.read()
      this.notify('Message updated')
      
      subject.next({
        label: 'ACCEPTED',
        reason: 'Message updated'
      })
    })

    return subject
  }


  delete(target: Message): Observable<MethodAcceptance> {
    if (!target.id) return of({label: 'REJECTED', reason: 'Invalid ID'})

    const subject = new Subject<MethodAcceptance>()
    
    this.http.delete(`${this.API}/${target.id}`).subscribe(responseData => {
      const updatedList = this._data.value.filter(m => m.id !== target.id)
      this._data.next(updatedList)
      this.notify('Message deleted')

      subject.next({
        label: 'ACCEPTED',
        reason: 'Message deleted'
      })
    })

    return subject
  }
}
