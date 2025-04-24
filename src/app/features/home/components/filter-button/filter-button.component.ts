import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  standalone: false
})
export class FilterButtonComponent {
  @Input() activeFiltersCount = 0;
  @Output() filterClick = new EventEmitter<void>();

  onClick() {
    this.filterClick.emit();
  }
}