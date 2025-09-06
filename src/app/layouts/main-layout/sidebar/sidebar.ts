import { Component } from '@angular/core';
import { SidebarItem } from './sidebar-item/sidebar-item';
import { SIDEBAR_GROUPS } from './configs/sidebar-groups-config';
import { SidebarGroupData } from './types/sidebar-group-data';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItem],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  sidebarOpen: boolean = false;
  sidebarGroups: SidebarGroupData[] = SIDEBAR_GROUPS;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
