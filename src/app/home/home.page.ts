import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  courses: any[];
  trainings: any[];
  upcomings: any[];


  constructor(private router: Router) {

    this.courses = [
      {
        color: '#cd7065',
        title: 'Internet',
        contain: 'Human Computer Interaction',
        subContain: 'COURSE',
        icon1: 'people-outline',
        iconLabel1: '68',
        icon2: 'star-outline',
        iconLabel2: '3.5',
        icon3: 'chatbubbles-outline',
        iconLabel3: '24',
        icon4: 'book-outline',
        iconLabel4: '15',
        progressBar: '0.3',
        progressBarLabel: '(34%)',
        childContain: 'Next:',
        subcChildContain: 'How to set DIV in sketch-app',
        subChildSubContain: 'This lessons covers the basics of settings up grid in sketch, it is very popular couese taken by man ',
        subHeadingIcon: 'document-text-outline',
        subHeadingIconLabel: '12 min Read',
        button: 'Continue',
        subcCoursesHeaderContain: 'STARS WED,31ST MARCH 2018',
        subCouressContainData: 'A popular methos of cooking chicken in recent years bot in Barbeque contest as well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier but the results are worthwhile',
        tabs: {
          overview: {
            title: "COURSE OVERVIEW",
            discription: `A popular methos of cooking chicken in recent years bot in Barbeque
            contest as well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier
            but the results are worthwhile A popular methos of cooking chicken in recent years bot in Barbeque contest as
            well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier but the
            results are worthwhile`,
            righttitle: "THIS COURSE IS FOR",
            rightDescription: `A popular methos of cooking chicken in recent years bot in Barbeque
            contest as well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier
            but the results are worthwhile A popular methos of cooking chicken in recent years bot in Barbeque contest as
            well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier but the
            results are worthwhile`
          },
          resourses: [
            {

              icon: 'newspaper-outline',
              discription: 'Live Poker How To Win Tournament Games',
              subDiscription: 'New',
              discriptionRight: '121 Views ',
              subDiscriptionRight: ' 10 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'Telescopes 101',
              //subDiscription: 'New',
              discriptionRight: '121 Views ',
              subDiscriptionRight: ' 10 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {
              title: "resourses",
              icon: 'newspaper-outline',
              discription: 'Going Wireless With Your Headphones',
              // subDiscription: 'New',
              discriptionRight: '07 Views ',
              subDiscriptionRight: ' 01 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'The Glossary Of Telescopes',
              // subDiscription: 'New',
              discriptionRight: '55 Views ',
              subDiscriptionRight: ' 29 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'On Being Human',
              // subDiscription: 'New',
              discriptionRight: '243 Views ',
              subDiscriptionRight: ' 124 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'A Brief History Of Creation',
              // subDiscription: 'New',
              discriptionRight: '153 Views ',
              subDiscriptionRight: ' 67 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
          ],
          discussions: {
            title: "DISCUSSION",
            discussionHeading: 'Deciphring Marketing Lingo For Small Business Owners',
            discussionContain: 'Experts doubt will even try or that if they do that the will be successfull. Ones the bill was passed and signed into law by the president, it became much harder to reserse the law',
            usericon: 'person-circle',
            userName: 'Nicholas Green',
            likeicon: 'thumbs-up',
            likedesc: '74 Likes'
          }
        }

      },
      {
        color: '#886c5e',
        title: 'Product Training',
        contain: 'Modeling with SOLID WORKS',
        subContain: 'COURSE',
        icon1: 'people-outline',
        iconLabel1: '43',
        icon2: 'star-outline',
        iconLabel2: '3',
        icon3: 'chatbubbles-outline',
        iconLabel3: '12',
        icon4: 'book-outline',
        iconLabel4: '4',
        progressBar: '0.3',
        progressBarLabel: '(34%)',
        childContain: 'Next:',
        subcChildContain: 'Shortcut in Solidworks',
        subChildSubContain: 'This lessons covers the basics of settings up grid in sketch, it is very popular couese taken by man ......',
        subHeadingIcon: 'document-text-outline',
        subHeadingIconLabel: '12 min Read',
        button: 'Continue',
        subcCoursesHeaderContain: 'STARS WED,31ST MARCH 2018',
        subCouressContainData: 'A popular methos of cooking chicken in recent years bot in Barbeque contest as well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier but the results are worthwhile',
        tabs: {
          overview: {
            title: "COURSE OVERVIEW",
            discription: `A popular methos of cooking chicken in recent years bot in Barbeque
            contest as well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier
            but the results are worthwhile A popular methos of cooking chicken in recent years bot in Barbeque contest as
            well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier but the
            results are worthwhile`,
            righttitle: "THIS COURSE IS FOR",
            rightDescription: `A popular methos of cooking chicken in recent years bot in Barbeque
            contest as well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier
            but the results are worthwhile A popular methos of cooking chicken in recent years bot in Barbeque contest as
            well as backyard bardeques is the beer-can chicken.Cooking a beer-can chicken couldnt be any easier but the
            results are worthwhile`
          },
          resourses: [
            {

              icon: 'newspaper-outline',
              discription: 'Live Poker How To Win Tournament Games',
              subDiscription: 'New',
              discriptionRight: '121 Views ',
              subDiscriptionRight: ' 10 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'Telescopes 101',
              //subDiscription: 'New',
              discriptionRight: '121 Views ',
              subDiscriptionRight: ' 10 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {
              title: "resourses",
              icon: 'newspaper-outline',
              discription: 'Going Wireless With Your Headphones',
              // subDiscription: 'New',
              discriptionRight: '07 Views ',
              subDiscriptionRight: ' 01 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'The Glossary Of Telescopes',
              // subDiscription: 'New',
              discriptionRight: '55 Views ',
              subDiscriptionRight: ' 29 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'On Being Human',
              // subDiscription: 'New',
              discriptionRight: '243 Views ',
              subDiscriptionRight: ' 124 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
            {

              icon: 'newspaper-outline',
              discription: 'A Brief History Of Creation',
              // subDiscription: 'New',
              discriptionRight: '153 Views ',
              subDiscriptionRight: ' 67 Downloads',
              discriptionView: 'View',
              downloadIcon: 'download-outline'
            },
          ],
          discussions: {
            title: "DISCUSSION",
            discussionHeading: 'Deciphring Marketing Lingo For Small Business Owners',
            discussionContain: 'Experts doubt will even try or that if they do that the will be successfull. Ones the bill was passed and signed into law by the president, it became much harder to reserse the law',
            usericon: 'person-circle',
            userName: 'Nicholas Green',
            likeicon: 'thumbs-up',
            likedesc: '74 Likes'
          }
        }
      }

    ];

    this.trainings = [
      {
        color: '#a0a9d6',
        title: 'Soft Skills',
        contain: 'Iot Development with Windows 10',
        subContain: 'TRAINING   10 Jan - 01 Mar 2018',
        icon1: 'people-outline',
        iconLabel1: '10',
        icon2: 'star-outline',
        iconLabel2: '4.5',
        icon3: 'chatbubbles-outline',
        iconLabel3: '0',
        icon4: 'book-outline',
        iconLabel4: '10',
        childContain: 'Next:',
        subcChildContain: 'Wednesday, 18th Feb, 2018 IIT Mumbai',
        // color:'#ffbf00',
        subTitle: 'Main Gate Road,Powai,Mumbail-400076',
        subChildSubContain: 'This class covers the basics of settings up grid in sketch, it is very popular couese taken by man ......',
        //subHeadingIcon:'document-text-outline',
        //subHeadingIconLabel:'12 min Read',
        button: 'Add to Calender'
      },
      {
        color: '#80dce8',
        title: 'Health',
        contain: 'Excel 2016:Advanced Formulas and Functions',
        subContain: 'TRAINING   10 Jan - 01 Mar 2018',
        icon1: 'people-outline',
        iconLabel1: '15',
        icon2: 'star-outline',
        iconLabel2: '3.5',
        icon3: 'chatbubbles-outline',
        iconLabel3: '20',
        icon4: 'book-outline',
        iconLabel4: '3',
        // progressBar:'0.3',
        // progressBarLabel:'(34%)',
        childContain: 'Next:',
        subcChildContain: 'Tuesday, 01st Mar, 2018 MIT - ID Pune',
        subTitle: 'Main Gate Road,Powai,Mumbail-400076',
        // subChildSubContain:'This class covers the basics of settings up grid in sketch, it is very popular couese taken by man ......',
        //subHeadingIcon:'document-text-outline',
        //subHeadingIconLabel:'12 min Read',
        button: 'Add to Calender'
      }];

    this.upcomings = [
      {

        color: '#937c71',
        title: 'Product Training',
        contain: 'Administrative Human Resources',
        subContain: 'Stars in 3 Days',
        subSubContain: 'COURSE',
        icon1: 'people-outline',
        iconLabel1: '15',
        icon2: 'star-outline',
        iconLabel2: '3.5',
      },
      {

        color: '#bb6d69',
        title: 'Internet',
        contain: 'UX Design:6 Paper Prototyping',
        subContain: 'Stars in 3 Days',
        subSubContain: 'TRAINING',
        icon1: 'people-outline',
        iconLabel1: '15',
        icon2: 'star-outline',
        iconLabel2: '3.5',
      },
      {

        color: '#80dce8',
        title: 'Health',
        contain: 'Introduction to Graphic Design (2016)',
        subContain: 'Stars in 3 Days',
        subSubContain: 'COURSE',
        icon1: 'people-outline',
        iconLabel1: '15',
        icon2: 'star-outline',
        iconLabel2: '3.5',
      }
    ]

  }
}
