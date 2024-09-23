import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'acme-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Output() logout$ = new EventEmitter();

  public onLogout() {
    this.logout$.emit();
  }
}
