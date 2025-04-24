import { Component, EventEmitter, Input, Output, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterOptions } from '../../models/filter-options.interface';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: false
})
export class FilterModalComponent implements OnInit {
  @Input() isOpen = false;
  @Input() currentFilters: FilterOptions = {
    ageGroup: '',
    gender: '',
    priceRange: { min: 0, max: 500 },
    giftType: '',
    deliverableUntil: null
  };
  
  @Output() closeModal = new EventEmitter<void>();
  @Output() applyFilters = new EventEmitter<FilterOptions>();
  @Output() clearFilters = new EventEmitter<void>();

  filterForm: FormGroup;
  
  ageGroups = [
    { id: 'baby', label: 'Baby', icon: 'baby' },
    { id: 'adult', label: 'Erwachsener', icon: 'user' },
    { id: 'elderly', label: 'Senior', icon: 'user-cog' }
  ];

  giftTypes = [
    { id: 'physical', label: 'Physisches Geschenk' },
    { id: 'digital', label: 'Digitales Geschenk' },
    { id: 'experience', label: 'Erlebnis' },
    { id: 'voucher', label: 'Gutschein' }
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      ageGroup: [''],
      gender: [''],
      priceRange: this.fb.group({
        min: [0],
        max: [500]
      }),
      giftType: [''],
      deliverableUntil: [null]
    });
  }

  ngOnInit() {
    this.filterForm.patchValue(this.currentFilters);
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.close();
  }

  close() {
    this.closeModal.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }

  onApplyFilters() {
    this.applyFilters.emit(this.filterForm.value);
    this.close();
  }

  onClearFilters() {
    this.filterForm.reset({
      ageGroup: '',
      gender: '',
      priceRange: { min: 0, max: 500 },
      giftType: '',
      deliverableUntil: null
    });
    this.clearFilters.emit();
  }

  getActiveFiltersCount(): number {
    const values = this.filterForm.value;
    let count = 0;
    
    if (values.ageGroup) count++;
    if (values.gender) count++;
    if (values.giftType) count++;
    if (values.deliverableUntil) count++;
    if (values.priceRange.min > 0 || values.priceRange.max < 500) count++;
    
    return count;
  }
}