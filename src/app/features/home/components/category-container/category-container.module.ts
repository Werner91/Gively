import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryContainerComponent } from './category-container.component';
import { 
  LucideAngularModule, 
  Heart, 
  Cake, 
  Baby, 
  Gem, 
  TreePine, 
  Egg, 
  Flower, 
  Beer, 
  Signature, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-angular';

@NgModule({
  declarations: [CategoryContainerComponent],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      Heart,
      Cake,
      Baby,
      Gem,
      TreePine,
      Egg,
      Flower,
      Beer,
      Signature,
      ChevronLeft,
      ChevronRight
    })
  ],
  exports: [CategoryContainerComponent]
})
export class CategoryContainerModule { }