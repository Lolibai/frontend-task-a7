import { Component, OnInit, Input } from '@angular/core'
import { Offering } from '../models/response';

@Component({
  selector: 'app-offering-card',
  templateUrl: './offering-card.component.html',
  styleUrls: ['./offering-card.component.scss']
})
export class OfferingCardComponent implements OnInit {

  item: Offering;

  @Input() set _item(newValue) {
    this.item = newValue
  }
  constructor() {}

  ngOnInit() {}
}
