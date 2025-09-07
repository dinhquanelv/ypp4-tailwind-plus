import { Component, Input } from '@angular/core';
import { MenuItemData } from '../../types/MenuItemData';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  @Input() items: MenuItemData[] = [];
}
