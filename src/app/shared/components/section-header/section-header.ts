import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
})
export class SectionHeader {
  @Input() title: string = '';
}
