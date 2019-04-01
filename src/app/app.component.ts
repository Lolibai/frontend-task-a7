import { Component, ElementRef } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItem = {} as any;
  constructor(ef: ElementRef) {
    ef.nativeElement.style.height = '100%'
  }

  setSelectedMenuItem(item) {
    this.selectedItem = item
  }
}
