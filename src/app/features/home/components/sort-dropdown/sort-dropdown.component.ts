import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortOption } from '../../../../shared/models/sort-option.interface';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.scss'],
  standalone: false
})
export class SortDropdownComponent {
  options: SortOption[] = [
    { value: 'popular', label: 'Relevanz' },
    { value: 'price-asc', label: 'Preis aufsteigend' },
    { value: 'price-desc', label: 'Preis absteigend' }
  ];

  @Input() selectedValue = '';
  @Output() sortChange = new EventEmitter<string>();

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(value: string) {
    this.selectedValue = value;
    this.sortChange.emit(value);
    this.isOpen = false;
  }

  getSelectedLabel(): string {
    return this.options.find(opt => opt.value === this.selectedValue)?.label || '';
  }
}