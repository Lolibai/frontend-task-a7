import { Component, OnInit, Input, ElementRef } from '@angular/core'

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() icon
  @Input() label
  @Input() link

  @Input() set _icon(newValue) {
    this.icon = newValue
  }
  @Input() set _label(newValue) {
    this.label = newValue
  }
  @Input() set _link(newValue) {
    this.link = newValue
  }

  constructor(ef: ElementRef) {
    ef.nativeElement.style.width = '100%'
  }

  ngOnInit() {}
}
