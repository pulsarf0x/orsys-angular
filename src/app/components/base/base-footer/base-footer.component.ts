import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-base-footer',
  templateUrl: './base-footer.component.html',
  styleUrl: './base-footer.component.scss'
})
export class BaseFooterComponent {
  displayed = false;

  toggle() {
    this.displayed = !this.displayed
  }
}
