import { Component } from '@angular/core';
import { FilterOptions } from '../../shared/models/filter-options.interface';
import { GiftItem } from '../../shared/models/gift-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent {
  selectedSort = 'popular';
  showFilterModal = false;
  activeTab = 'popular';
  showScrollTop = false;
  showNavigation = false;
  isAtStart = true;
  isAtEnd = false;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  activeFilters: FilterOptions = {
    ageGroup: '',
    gender: '',
    priceRange: { min: 0, max: 500 },
    giftType: '',
    deliverableUntil: null
  };

  giftItems: GiftItem[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Geschenkidee #${i + 1}`,
    category: 'Kategorie XYZ',
    price: (Math.random() * 100).toFixed(2),
    occasion: 'Anlass',
    recipient: 'Empfänger',
    rating: `4.${Math.floor(Math.random() * 9)}`,
    likes: Math.floor(Math.random() * 200),
    imageUrl: 'https://fastly.picsum.photos/id/835/500/300.jpg?hmac=-YGtvgqL6iNxKvqRze3-qDrtPAOXXigTgFU2YHhNYZQ'
  }));

  toggleFilterModal() {
    this.showFilterModal = !this.showFilterModal;
  }

  handleApplyFilters(filters: FilterOptions) {
    this.activeFilters = filters;
    this.showFilterModal = false;
    // Implement filter logic here
  }

  handleClearFilters() {
    this.activeFilters = {
      ageGroup: '',
      gender: '',
      priceRange: { min: 0, max: 500 },
      giftType: '',
      deliverableUntil: null
    };
  }

  getActiveFiltersCount(): number {
    let count = 0;
    if (this.activeFilters.ageGroup) count++;
    if (this.activeFilters.gender) count++;
    if (this.activeFilters.giftType) count++;
    if (this.activeFilters.deliverableUntil) count++;
    if (this.activeFilters.priceRange.min > 0 || this.activeFilters.priceRange.max < 500) count++;
    return count;
  }

  checkForOverflow() {
    const container = document.querySelector('.categories-container');
    const content = container?.querySelector('.flex');
    if (container && content) {
      this.showNavigation = content.scrollWidth > container.clientWidth;
      this.updateScrollButtons(container);
    }
  }

  updateScrollButtons(container: Element) {
    this.isAtStart = container.scrollLeft <= 0;
    this.isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
  }

  scrollCategories(direction: 'left' | 'right') {
    const container = document.querySelector('.categories-container');
    if (container) {
      const scrollAmount = 300; // Fixed scroll amount
      const currentScroll = container.scrollLeft;
      
      if (direction === 'left') {
        container.scrollLeft = currentScroll - scrollAmount;
      } else {
        container.scrollLeft = currentScroll + scrollAmount;
      }
      
      // Update button states after scrolling
      setTimeout(() => this.updateScrollButtons(container), 100);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private handleScroll = () => {
    this.showScrollTop = window.scrollY > 500;
  };

  private handleResize = () => {
    this.checkForOverflow();
  };

  private handleContainerScroll = () => {
    const container = document.querySelector('.categories-container');
    if (container) {
      this.updateScrollButtons(container);
    }
  };

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
    
    // Initial check for overflow
    this.checkForOverflow();

    // Check on window resize
    window.addEventListener('resize', this.handleResize);

    // Add touch/mouse event listeners for the category container
    const container = document.querySelector('.categories-container');
    if (container) {
      container.addEventListener('mousedown', (e) => this.startDragging(e as MouseEvent));
      container.addEventListener('mousemove', (e) => this.drag(e as MouseEvent));
      container.addEventListener('mouseup', () => this.stopDragging());
      container.addEventListener('mouseleave', () => this.stopDragging());
      container.addEventListener('touchstart', (e) => this.startDragging(e as TouchEvent));
      container.addEventListener('touchmove', (e) => this.drag(e as TouchEvent));
      container.addEventListener('touchend', () => this.stopDragging());
      container.addEventListener('scroll', this.handleContainerScroll);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);

    const container = document.querySelector('.categories-container');
    if (container) {
      container.removeEventListener('mousedown', (e) => this.startDragging(e as MouseEvent));
      container.removeEventListener('mousemove', (e) => this.drag(e as MouseEvent));
      container.removeEventListener('mouseup', () => this.stopDragging());
      container.removeEventListener('mouseleave', () => this.stopDragging());
      container.removeEventListener('touchstart', (e) => this.startDragging(e as TouchEvent));
      container.removeEventListener('touchmove', (e) => this.drag(e as TouchEvent));
      container.removeEventListener('touchend', () => this.stopDragging());
      container.removeEventListener('scroll', this.handleContainerScroll);
    }
  }

  startDragging(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    const container = e.currentTarget as HTMLElement;
    (container as HTMLElement).style.scrollBehavior = 'auto';
    
    if (e instanceof MouseEvent) {
      this.startX = e.pageX - container.offsetLeft;
    } else {
      this.startX = e.touches[0].pageX - container.offsetLeft;
    }
    
    this.scrollLeft = container.scrollLeft;
  }

  drag(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    
    const container = e.currentTarget as HTMLElement;
    const x = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
    const walk = x - container.offsetLeft - this.startX;
    const stepSize = 5; // Smaller step size for smoother scrolling
    const steps = Math.round(walk / stepSize) * stepSize;
    
    container.scrollLeft = this.scrollLeft - steps;
    this.updateScrollButtons(container);
  }

  stopDragging() {
    this.isDragging = false;
    const container = document.querySelector('.categories-container') as HTMLElement;
    if (container) {
      container.style.scrollBehavior = 'smooth';
    }
  }
}