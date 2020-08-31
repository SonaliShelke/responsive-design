import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  courses: any[];


  constructor() {

    this.courses =[
      {
        color:'#cd7065',
        title: 'Internet',
        contain: 'Human Computer Interaction',
        subContain:'COURSE',
        icon1: 'people-outline',
        iconLabel1:'68',
        icon2: 'star-outline',
        iconLabel2:'3.5',
        icon3: 'chatbubbles-outline',
        iconLabel3:'24',
        icon4: 'book-outline',
        iconLabel4:'15',
        progressBar:'0.3',
        progressBarLabel:'(34%)',
        childContain:'Next',
        subcChildContain:'How to set DIV in sketch App',
        subChildSubContain:'This lessons covers the basics of settings up grid in sketch, it is very popular couese taken by man ......',
        subHeadingIcon:'document-text-outline',
        subHeadingIconLabel:'12 min Read',
        button:'Continue'
      },
      {
        color:'#886c5e',
        title: 'Product Training',
        contain: 'Modeling with SOLID WORKS',
        subContain:'COURSE',
        icon1: 'people-outline',
        iconLabel1:'43',
        icon2: 'star-outline',
        iconLabel2:'3',
        icon3: 'chatbubbles-outline',
        iconLabel3:'12',
        icon4: 'book-outline',
        iconLabel4:'4',
        progressBar:'0.3',
        progressBarLabel:'(34%)',
        childContain:'Next',
        subcChildContain:'Shortcut in Solidworks',
        subChildSubContain:'This lessons covers the basics of settings up grid in sketch, it is very popular couese taken by man ......',
        subHeadingIcon:'document-text-outline',
        subHeadingIconLabel:'12 min Read',
        button:'Continue'
      },
      {
        color:'#a0a9d6',
        title: 'Soft Skills',
        contain: 'Iot Development with Windows 10',
        subContain:'TRAINING   10 Jan - 01 Mar 2018',
        icon1: 'people-outline',
        iconLabel1:'10',
        icon2: 'star-outline',
        iconLabel2:'4.5',
        icon3: 'chatbubbles-outline',
        iconLabel3:'0',
        icon4: 'book-outline',
        iconLabel4:'10',
        childContain:'Next',
        subcChildContain:'Wednesday, 18th Feb, 2018 IIT Mumbai',
       // color:'#ffbf00',
        subTitle:'Main Gate Road,Powai,Mumbail-400076',
        subChildSubContain:'This class covers the basics of settings up grid in sketch, it is very popular couese taken by man ......',
        //subHeadingIcon:'document-text-outline',
        //subHeadingIconLabel:'12 min Read',
        button:'Add to Calender'
      },
      {
        color:'#80dce8',
        title: 'Health',
        contain: 'Excel 2016:Advanced Formulas and Functions',
        subContain:'TRAINING   10 Jan - 01 Mar 2018',
        icon1: 'people-outline',
        iconLabel1:'15',
        icon2: 'star-outline',
        iconLabel2:'3.5',
        icon3: 'chatbubbles-outline',
        iconLabel3:'20',
        icon4: 'book-outline',
        iconLabel4:'3',
       // progressBar:'0.3',
       // progressBarLabel:'(34%)',
        childContain:'Next',
        subcChildContain:'Tuesday, 01st Mar, 2018 MIT - ID Pune',
        subTitle:'Main Gate Road,Powai,Mumbail-400076',
       // subChildSubContain:'This class covers the basics of settings up grid in sketch, it is very popular couese taken by man ......',
        //subHeadingIcon:'document-text-outline',
        //subHeadingIconLabel:'12 min Read',
        button:'Add to Calender'
      },

    ]

  }

  
  
}
