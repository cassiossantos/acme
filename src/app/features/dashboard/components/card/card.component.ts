import { Component, Input } from '@angular/core';

@Component({
  selector: 'acme-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() amount!: string;
  @Input() color: 'success' | 'failure' | '' = '';
}
