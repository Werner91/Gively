import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCardComponent } from './gift-card.component';

@NgModule({
  declarations: [GiftCardComponent],
  imports: [CommonModule],
  exports: [GiftCardComponent]
})
export class GiftCardModule { }