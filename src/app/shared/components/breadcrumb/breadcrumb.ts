import { Component, Input } from '@angular/core';

export interface BreadcrumbItemData {
  label: string;
  link?: string;
  color?: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  @Input() items: BreadcrumbItemData[] = [];
}
