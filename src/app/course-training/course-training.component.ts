import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../service/utility.service'

@Component({
  selector: 'app-course-training',
  templateUrl: './course-training.component.html',
  styleUrls: ['./course-training.component.scss'],
})
export class CourseTrainingComponent implements OnInit {

  @Input() course: any;
  navCtrl: any;

  constructor(public utilityservice: UtilityService, private router: Router) { }

  gotoCoursePage() {
    this.utilityservice.setExtras(this.course);
    console.log('course', this.course);
    this.router.navigateByUrl('/courses');
  }

  ngOnInit() { }

}
