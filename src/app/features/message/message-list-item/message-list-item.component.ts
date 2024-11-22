import { Component, inject, Input } from '@angular/core';
import { Message, MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrl: './message-list-item.component.scss',
})
export class MessageListItemComponent {
  public messageService = inject(MessageService)
  
  @Input() message: Message | null = null
  
  delete() {
    if (this.message) this.messageService.delete(this.message)
  }
}
