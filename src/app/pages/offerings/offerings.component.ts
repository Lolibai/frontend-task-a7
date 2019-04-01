import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { ResponseFromAPI, Offering } from './models/response'
import { Observable } from 'rxjs'
@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {
  offerings$: Observable<Offering[]> = this.http
    .get<ResponseFromAPI>('../../../assets/data/data.json')
    .pipe(map(res => res.offerings))
  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
