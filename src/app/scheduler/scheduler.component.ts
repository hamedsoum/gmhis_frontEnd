import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDate, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct, NgbCalendarGregorian } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from '../../app/_utility/date/ngb-datepicker'
import { medicalServiceService } from '../_services/medicalService.service';
import { PatientService } from '../_services/patient.service';
import { PracticianService } from '../_services/practician.service';
import { SpecialityService } from '../_services/speciality.service';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider

})
export class SchedulerComponent implements OnInit {

  /**
   * 
   */
  currentDate = new Date();

  /**
   * 
   */
  currentDayNumber: number;

  /**
   * 
   */
  currentDayName: string;

  /**
   * 
   */
  currentMonthName: string;

  /**
   * 
   */
  currentYear: number;

  /**
   * 
   */
  schedulerRange = ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

  /**
   * 
   */
  weekdays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  /**
   * 
   */
  months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'];

  /**
   * 
   */
  selectedWeekDays = [];

  /**
   * 
   */
  selectedWeekDayDates = [];

  /**
   * 
   */
  hoveredDate: NgbDate | null = null;

  /**
   * 
   */
  fromDate: NgbDate;

  /**
   * 
   */
  toDate: NgbDate | null = null;

  /**
   * define Practician options
   */
  practicians: object;

  /**
   * define speciality options
   */
  specialities: object;

  /**
   * define service options
   */
  services: object;

  /**
   * define patient options
   */
  patients: object;

  /**
   * selected component name 
   */
  component: string;

  constructor(
    private MedicalService: medicalServiceService,
    private specialityService: SpecialityService,
    private practicianService: PracticianService,
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    calendar: NgbCalendar
  ) {

    this.fromDate = calendar.getToday();
    this.setSelectedWeek(calendar, this.fromDate);
  }

  ngOnInit(): void {

    let d = new Date(this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day);

    //get the current component name
    this.component = this.activatedRoute.snapshot.component['name'];

    //variable use to set today date i the template
    this.currentDayNumber = this.fromDate.day;
    this.currentDayName = this.weekdays[d.getDay()];
    this.currentMonthName = this.months[this.fromDate.month];
    this.currentYear = this.fromDate.year;

    this.MedicalService.getIdAndName().subscribe(res => { this.services = res });
    this.specialityService.findAll().subscribe(res => { this.specialities = res });
    this.practicianService.getIdAndName().subscribe(res => { this.practicians = res });
    this.patientService.getIdAndName().subscribe(res => { this.patients = res });

  }

  /**
   * set the selected week
   * @param calendar calendar
   * @param fromDate 
   */
  setSelectedWeek(calendar : NgbCalendar, fromDate : NgbDate){
    let d = new Date(fromDate.year + '-' + fromDate.month + '-' + fromDate.day);
    let weekPart1 = this.weekdays.slice(0, d.getDay());
    let weekPart2 = this.weekdays.slice(d.getDay(), this.weekdays.length);
    this.selectedWeekDays = weekPart2.concat(weekPart1);
    this.selectedWeekDayDates = [];

    for (let index = 0; index < 7; index++) {
      let date = calendar.getNext(fromDate, 'd', index);
      this.selectedWeekDayDates.push(date.day + '/' + date.month)
    }
  }

 
  onDateSelection(date: NgbDate) {
    let calendar = new NgbCalendarGregorian();
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    
    this.setSelectedWeek(calendar, this.fromDate);
  }


  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
