import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, SlidersHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      SlidersHorizontal
    })
  ]
})
export class FilterButtonComponent {
  @Input() activeFiltersCount = 0;
  @Output() filterClick = new EventEmitter<void>();

  onClick() {
    this.filterClick.emit();
  }
}