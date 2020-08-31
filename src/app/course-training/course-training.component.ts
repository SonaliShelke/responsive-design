import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-training',
  templateUrl: './course-training.component.html',
  styleUrls: ['./course-training.component.scss'],
})
export class CourseTrainingComponent implements OnInit {

  @Input()course: any;
  //@Input()courseTraining:any;
  constructor() { }

  ngOnInit() {}

}
