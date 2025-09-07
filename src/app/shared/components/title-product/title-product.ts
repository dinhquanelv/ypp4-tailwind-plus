import { Component, Input } from '@angular/core';

export interface TitleProductData {
  title: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'gray-900' | 'gray-800' | 'gray-700' | 'black';
  tracking?: 'normal' | 'tight' | 'tighter';
}

@Component({
  selector: 'app-title-product',
  imports: [],
  templateUrl: './title-product.html',
})
export class TitleProduct {
  @Input() data: TitleProductData = {
    title: 'Product Title',
    size: 'large',
    weight: 'bold',
    color: 'gray-900',
    tracking: 'tight',
  };

  get titleClasses(): string {
    const baseClasses = 'leading-tight';

    const sizeClasses = {
      small: 'text-lg sm:text-xl',
      medium: 'text-xl sm:text-2xl',
      large: 'text-2xl sm:text-3xl',
      xlarge: 'text-3xl sm:text-4xl',
    };

    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    };

    const colorClasses = {
      'gray-900': 'text-gray-900',
      'gray-800': 'text-gray-800',
      'gray-700': 'text-gray-700',
      black: 'text-black',
    };

    const trackingClasses = {
      normal: 'tracking-normal',
      tight: 'tracking-tight',
      tighter: 'tracking-tighter',
    };

    return [
      baseClasses,
      sizeClasses[this.data.size || 'large'],
      weightClasses[this.data.weight || 'bold'],
      colorClasses[this.data.color || 'gray-900'],
      trackingClasses[this.data.tracking || 'tight'],
    ].join(' ');
  }
}
