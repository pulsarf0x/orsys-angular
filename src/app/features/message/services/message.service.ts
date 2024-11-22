import { Injectable } from '@angular/core';
import { CrudService, MethodAcceptance, UniqueData } from '../../../core/interfaces/crud-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Message extends UniqueData {
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService implements CrudService<Message> {

  constructor(
    private http: HttpClient
  ) { }

  private _data = new BehaviorSubject<Message[]>([])
  data$ = this._data.asObservable();

  create(data: Omit<Message, 'id'>): Observable<MethodAcceptance> {
    throw new Error('Method not implemented.');
  }
  
  read(): Observable<MethodAcceptance> {
    throw new Error('Method not implemented.');
  }

  update(target: Message, data: Partial<Message>): Observable<MethodAcceptance> {
    throw new Error('Method not implemented.');
  }

  delete(): Observable<MethodAcceptance> {
    throw new Error('Method not implemented.');
  }
}
