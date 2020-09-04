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




  // this.utilityservice.setExtras(extras)
  //this.router.navigateByUrl('page-b');


  constructor(public utilityservice: UtilityService, private router: Router) { }

  gotoCoursePage() {
    // this.router.navigateByUrl('/courses');

    // this.router.navigate(['/courses', { 'customerdata': JSON.stringify(custData) }]);

    // this.navCtrl.push(AddCustomerPage, { 'customerdata': custData });

    this.utilityservice.setExtras(this.course);
    console.log('course', this.course);
    this.router.navigateByUrl('/courses');
  }

  ngOnInit() { }

}
