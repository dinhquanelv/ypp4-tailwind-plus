import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-preview',
  imports: [],
  templateUrl: './category-preview.html',
  styleUrl: './category-preview.scss',
})
export class CategoryPreview {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
