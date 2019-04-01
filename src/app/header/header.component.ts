import { Component, OnInit, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  icon = 'gavel fa-flip-horizontal'
  headTitle = 'dashboard'

  @Input() set _icon(newValue) {
    this.icon = newValue
  }

  @Input() set _headTitle(newValue) {
    this.headTitle = newValue
  }

  constructor() {}

  ngOnInit() {}
}
