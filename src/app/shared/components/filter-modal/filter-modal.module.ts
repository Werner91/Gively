import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterModalComponent } from './filter-modal.component';
import { 
  LucideAngularModule, 
  X, 
  Baby, 
  User, 
  UserCog 
} from 'lucide-angular';

@NgModule({
  declarations: [
    FilterModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
      X,
      Baby,
      User,
      UserCog
    }
    )
  ],
  exports: [
    FilterModalComponent
  ]
})
export class FilterModalModule { }