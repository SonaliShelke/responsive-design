import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-recommended',
  templateUrl: './upcoming-recommended.component.html',
  styleUrls: ['./upcoming-recommended.component.scss'],
})
export class UpcomingRecommendedComponent implements OnInit {

  @Input() upcoming: any;
  constructor() { }

  ngOnInit() { }

}
