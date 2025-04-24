import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Heart, Cake, Baby, Gem, TreePine, Egg, Flower, Beer, Signature, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
  standalone: true,
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
  ]
})
export class CategoryContainerComponent {
  @Input() activeTab = 'popular';
  @Input() showNavigation = false;
  @Input() isAtStart = true;
  @Input() isAtEnd = false;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  scrollCategories(direction: 'left' | 'right') {
    const container = document.querySelector('.categories-container');
    if (container) {
      const scrollAmount = 300;
      const currentScroll = container.scrollLeft;
      
      if (direction === 'left') {
        container.scrollLeft = currentScroll - scrollAmount;
      } else {
        container.scrollLeft = currentScroll + scrollAmount;
      }
      
      setTimeout(() => this.updateScrollButtons(container), 100);
    }
  }

  updateScrollButtons(container: Element) {
    this.isAtStart = container.scrollLeft <= 0;
    this.isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
  }

  startDragging(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    const container = e.currentTarget as HTMLElement;
    container.style.scrollBehavior = 'auto';
    
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
    const stepSize = 5;
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