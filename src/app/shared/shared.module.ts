import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterModalModule } from './components/filter-modal/filter-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FilterModalModule
  ],
  exports: [
    FilterModalModule
  ]
})
export class SharedModule { }