import { Component, Input } from '@angular/core';

export interface PricingData {
  price: string;
  size: 'sm' | 'md' | 'lg';
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
})
export class Pricing {
  @Input() data: PricingData = { price: '$0', size: 'md' };

  get sizeClasses(): string {
    const sizes = {
      sm: 'text-lg',
      md: 'text-3xl',
      lg: 'text-4xl',
    };
    return sizes[this.data.size];
  }
}
