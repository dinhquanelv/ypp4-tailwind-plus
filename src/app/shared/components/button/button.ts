import { Component, Input } from '@angular/core';

export interface ButtonData {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  width?: 'fit' | 'half' | 'full';
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  @Input() data: ButtonData = {
    text: 'Button',
    type: 'button',
    width: 'fit',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  };

  get buttonClasses(): string {
    const baseClasses =
      'flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-hidden transition-colors duration-200';

    // Width classes
    const widthClasses = {
      fit: 'w-auto',
      half: 'w-1/2',
      full: 'w-full',
    };

    // Size classes
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-8 py-3 text-base',
    };

    // Variant classes
    const variantClasses = {
      primary:
        'bg-indigo-600 text-white border border-transparent hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-indigo-400',
      secondary:
        'bg-gray-600 text-white border border-transparent hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-400',
      outline:
        'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-300',
      disabled: 'bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed',
    };

    return [
      baseClasses,
      widthClasses[this.data.width || 'fit'],
      sizeClasses[this.data.size || 'medium'],
      variantClasses[this.data.variant || 'primary'],
    ].join(' ');
  }

  get isDisabled(): boolean {
    return this.data.disabled || this.data.variant === 'disabled';
  }

  handleClick(): void {
    if (!this.isDisabled && this.data.onClick) {
      this.data.onClick();
    }
  }
}
