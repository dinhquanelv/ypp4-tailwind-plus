import { Component, Input } from '@angular/core';

export interface FeatureItem {
  text: string;
}

export interface FeatureListData {
  title: string;
  items: FeatureItem[];
}

@Component({
  selector: 'app-feature-list',
  imports: [],
  templateUrl: './feature-list.html',
})
export class FeatureList {
  @Input() data: FeatureListData = {
    title: 'Features',
    items: [],
  };
}
