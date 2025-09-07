import { Component, Input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItemData } from '../../types/MenuItemData';

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  @Input() items: MenuItemData[] = [];
}
