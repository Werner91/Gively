import { Component, Input } from '@angular/core';
import { GiftItem } from '../../../../shared/models/gift-item.interface';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss'],
  standalone: false
})
export class GiftCardComponent {
  @Input() item!: GiftItem;
}