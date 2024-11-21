import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrl: './base-header.component.scss'
})
export class BaseHeaderComponent {
  public online = true

  @HostListener('window:offline')
  setOffline() {
    this.online = false
  }

  @HostListener('window:online')
  setOnline() {
    this.online = true
  }
}
