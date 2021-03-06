import { Component, ElementRef } from '@angular/core'
import { MenuItem } from './sidebar/models/MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItem = {
    icon: 'gavel fa-flip-horizontal',
    label: 'dashboard',
    link: '/dashboard'
  } as MenuItem;
  constructor(ef: ElementRef) {
    ef.nativeElement.style.height = '100%'
  }

  setSelectedMenuItem(item) {
    this.selectedItem = item
  }
}
