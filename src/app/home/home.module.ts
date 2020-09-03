import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module'
import { CourseTrainingComponent } from '../course-training/course-training.component';
import { UpcomingRecommendedComponent } from '../upcoming-recommended/upcoming-recommended.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule


  ],
  declarations: [HomePage, CourseTrainingComponent, UpcomingRecommendedComponent],


})
export class HomePageModule { }
