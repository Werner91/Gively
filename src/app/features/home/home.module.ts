import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { 
  LucideAngularModule, 
  Gift, 
  Search, 
  SlidersHorizontal, 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowUp, 
  HeartIcon,
  Sparkles
} from 'lucide-angular';
import { CategoryContainerModule } from './components/category-container/category-container.module';
import { FilterButtonModule } from './components/filter-button/filter-button.module';
import { SortDropdownModule } from './components/sort-dropdown/sort-dropdown.module';
import { GiftCardModule } from './components/gift-card/gift-card.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryContainerModule,
    FilterButtonModule,
    SortDropdownModule,
    GiftCardModule,
    RouterModule.forChild(routes),
    LucideAngularModule.pick({
      Gift,
      Search,
      SlidersHorizontal,
      HeartIcon,
      Instagram,
      Facebook,
      Twitter,
      ArrowUp,
      Sparkles
    })
  ]
})
export class HomeModule { }