import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CoursePageModule } from '../course/course.module';
import { CoursePage } from '../course/course.page';
import { CourseTrainingComponent } from '../course-training/course-training.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CoursePageModule
    
  ],
  declarations: [HomePage,CourseTrainingComponent],


})
export class HomePageModule {}
