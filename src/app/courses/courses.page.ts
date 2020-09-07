import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../service/utility.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  location: any;
  segmentModel: any = 'overview';

  constructor(public utilityservice: UtilityService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.location = this.utilityservice.getExtras();

      if (!this.location) {
        this.router.navigateByUrl('/home');
      }
      console.log('course details init', this.location);

    });

  }

  ngOnInit() {

  }

  ngOnChanges() {

  }
  getbuttonclick() {
    this.location = this.utilityservice.getExtras();

  }

  segmentChanged(event) {
    console.log('event', this.segmentModel);

  }

}
