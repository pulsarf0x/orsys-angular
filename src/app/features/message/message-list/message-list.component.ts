import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent implements OnInit {
  public messageService = inject(MessageService)

  ngOnInit() {
    this.messageService.read()
  }
}
