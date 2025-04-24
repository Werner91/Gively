import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonComponent } from './filter-button.component';
import { 
  LucideAngularModule, 
  SlidersHorizontal 
} from 'lucide-angular';

@NgModule({
  declarations: [FilterButtonComponent],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      SlidersHorizontal
    })
  ],
  exports: [FilterButtonComponent]
})
export class FilterButtonModule { }