import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortDropdownComponent } from './sort-dropdown.component';
import { LucideAngularModule, ChevronDown, Check } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      ChevronDown,
      Check
    })
  ],
  declarations: [SortDropdownComponent],
  exports: [SortDropdownComponent]
})
export class SortDropdownModule { }