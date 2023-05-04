import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../_utility/date/ngb-datepicker";
import { HomeService } from '../_services/home.service';
import { AppCookieService } from '../_services/app-cookie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider
})
export class HomeComponent implements OnInit {

  todayDate : Date;

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  constructor(
    private homeService: HomeService,
    private router : Router
    ) { }

  ngOnInit(): void {
    
    this.homeService.getHome().subscribe(user =>{
      if ( user['passwordMustChange'] == 'Y') this.router.navigate(['/user/password-changing/'+ user['id']])
    })

    this.todayDate = new Date();
  }



}
