import { Component } from '@angular/core';
import { SIDEBAR_GROUPS } from '@app/layouts/main-layout/sidebar/configs/sidebar-groups-config';
import { SidebarItem } from '@app/layouts/main-layout/sidebar/sidebar-item/sidebar-item';
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
