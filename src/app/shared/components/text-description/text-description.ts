import { Component, Input } from '@angular/core';

export interface TextDescriptionData {
  title?: string;
  showTitle?: boolean;
  content: string;
}

@Component({
  selector: 'app-text-description',
  imports: [],
  templateUrl: './text-description.html',
})
export class TextDescription {
  @Input() data: TextDescriptionData = {
    title: 'Description',
    showTitle: false,
    content: '',
  };
}
