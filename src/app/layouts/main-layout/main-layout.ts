import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Sidebar, RouterOutlet],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
