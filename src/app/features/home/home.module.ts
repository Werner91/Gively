import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoryContainerModule } from './components/category-container/category-container.module';
import { FilterButtonModule } from './components/filter-button/filter-button.module';
import { SortDropdownModule } from './components/sort-dropdown/sort-dropdown.module';
import { LucideAngularModule, Gift, Search, SlidersHorizontal, Instagram, Facebook, Twitter, ArrowUp, HeartIcon, ArrowUpDown, ChevronDown, Check } from 'lucide-angular';

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
    RouterModule.forChild(routes),
    LucideAngularModule.pick({
      Gift,
      Search,
      SlidersHorizontal,
      HeartIcon,
      Instagram,
      Facebook,
      Twitter,
      ArrowUpDown,
      ChevronDown,
      Check,
      ArrowUp
    })
  ]
})
export class HomeModule { }