import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Menu } from './models/Menu'
import { MenuItem } from './models/MenuItem'
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu: Menu = new Menu([
    new MenuItem('gavel fa-flip-horizontal', 'dashboard', '/dashboard'),
    new MenuItem('exchange-alt', 'offerings', '/offerings'),
    new MenuItem('users', 'transactions', '/transactions'),
    new MenuItem('cogs', 'settings', '/settings')
  ])

  @Output() selectedMenuData = new EventEmitter()

  constructor(private location: Location) {
  }

  ngOnInit() {
    this.handleActiveRoute()
  }

  handleActiveRoute() {
    let active_menu = this.menu.find(this.location.path())
    this.selectedMenuData.emit(active_menu)
  }
}
