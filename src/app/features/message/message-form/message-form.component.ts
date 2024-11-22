import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss'
})
export class MessageFormComponent {
  private messageService = inject(MessageService)
  
  public text = ''

  send() {
    if (!this.text) return

    this.messageService.create({text: this.text})
  }

}
