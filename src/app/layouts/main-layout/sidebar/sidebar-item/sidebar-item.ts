import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface SidebarItemData {
  label: string;
  link: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterModule],
  templateUrl: './sidebar-item.html',
})
export class SidebarItem {
  @Input() item!: SidebarItemData;
}
