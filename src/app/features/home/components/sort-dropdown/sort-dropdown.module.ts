import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortDropdownComponent } from './sort-dropdown.component';
import { 
  LucideAngularModule, 
  ChevronDown, 
  Check 
} from 'lucide-angular';

@NgModule({
  declarations: [SortDropdownComponent],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      ChevronDown,
      Check
    })
  ],
  exports: [SortDropdownComponent]
})
export class SortDropdownModule { }