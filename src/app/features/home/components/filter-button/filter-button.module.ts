import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonComponent } from './filter-button.component';
import { LucideAngularModule, SlidersHorizontal } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      SlidersHorizontal
    })
  ],
  declarations: [FilterButtonComponent],
  exports: [FilterButtonComponent]
})
export class FilterButtonModule { }