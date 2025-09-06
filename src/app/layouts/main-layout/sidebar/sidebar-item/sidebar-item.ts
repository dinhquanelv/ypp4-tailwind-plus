import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarItemData } from './types/sidebar-item-data';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterModule],
  templateUrl: './sidebar-item.html',
})
export class SidebarItem {
  @Input() item!: SidebarItemData;
}
