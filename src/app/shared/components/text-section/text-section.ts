import { Component, Input } from '@angular/core';

export interface TextSectionData {
  title: string;
  content: string;
  titleSize?: 'small' | 'medium' | 'large';
  textSize?: 'small' | 'medium' | 'large';
}

@Component({
  selector: 'app-text-section',
  imports: [],
  templateUrl: './text-section.html',
})
export class TextSection {
  @Input() data: TextSectionData = {
    title: 'Section Title',
    content: '',
    titleSize: 'small',
    textSize: 'small',
  };

  get titleClasses(): string {
    const sizeClasses = {
      small: 'text-sm font-medium text-gray-900',
      medium: 'text-base font-medium text-gray-900',
      large: 'text-lg font-medium text-gray-900',
    };
    return sizeClasses[this.data.titleSize || 'small'];
  }

  get textClasses(): string {
    const sizeClasses = {
      small: 'text-sm text-gray-600',
      medium: 'text-base text-gray-600',
      large: 'text-lg text-gray-600',
    };
    return sizeClasses[this.data.textSize || 'small'];
  }
}
