import { Component, Input } from '@angular/core';

export interface FeatureCardItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCardData {
  items: FeatureCardItem[];
}

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
})
export class FeatureCard {
  @Input() data: FeatureCardData = {
    items: [],
  };
}
