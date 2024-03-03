import { Injectable } from '@angular/core';
import { PredefinedPeriod } from '../domain/predefinedPeriod';

@Injectable({
  providedIn: 'root'
})
export class PredefinedPeriodService {

private defaultSearchPeriode: object;
private searchDateRange: string;


  constructor() { }

  getSelectedPeriode(periode : PredefinedPeriod) : object{

    let date = new Date();
    let start = null;
    let end = null;
    if(periode == PredefinedPeriod.TODAY) {
      let periodeStart = new Date(date.getFullYear(),date.getMonth(), date.getDate());
      let periodeEnd = new Date(date.getFullYear(),date.getMonth(), date.getDate());
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
    }

    if(periode == PredefinedPeriod.YESTERDAY) {
      let periodeStart = new Date(date.getFullYear(),date.getMonth(), date.getDate()-1);
      let periodeEnd = new Date(date.getFullYear(),date.getMonth(), date.getDate()-1);
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
    }

    if(periode == PredefinedPeriod.THIS_WEEK) {
      let periodeStart = new Date(date.setDate(date.getDate() - date.getDay() + 1 ));
      let periodeEnd = new Date(date.setDate(date.getDate() - date.getDay() + 7));
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
    }

    if(periode == PredefinedPeriod.FLOATINGWEEK) {
      let periodeStart = new Date(date.getFullYear(),date.getMonth(), date.getDate() - 6);
      let periodeEnd = new Date(date.getFullYear(),date.getMonth(), date.getDate());
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
    }

    if(periode == PredefinedPeriod.LASTWEEK) {
      // set to Monday of this week
      date.setDate(date.getDate() - (date.getDay() + 6) % 7);
      // set to previous Monday
       var periodeStart = new Date(date.setDate(date.getDate() - 7))
      // set to previous Sunday
       var periodeEnd = new Date(date.getFullYear(),date.getMonth(), date.getDate() + 6)
       this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
      
    }

    if(periode == PredefinedPeriod.THIS_MONTH) {
      var periodeStart = new Date(date.getFullYear(), date.getMonth(), 1);
      var periodeEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
    }

    if(periode == PredefinedPeriod.FLOATINGMONTH) {
      var periodeStart = new Date(date.getFullYear(),date.getMonth()-1, date.getDate());
      var periodeEnd = new Date(date.getFullYear(), date.getMonth() , date.getDate());
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
    }

    if(periode == PredefinedPeriod.LASTMONTH) {
       var periodeStart = new Date(date.getFullYear(),date.getMonth()-1, 1);
      var periodeEnd = new Date(date.getFullYear(), date.getMonth() , 0);
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
    }

    if(periode == PredefinedPeriod.THIS_YEAR) {
      var periodeStart = new Date(date.getFullYear(), 0 , 1);
      var periodeEnd = new Date(date.getFullYear(), 12, 0 );
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
    }

    if(periode == PredefinedPeriod.FLOATINGYEAR) {
      var periodeStart = new Date(date.getFullYear()-1,date.getMonth(), date.getDate());
      var periodeEnd = new Date(date.getFullYear(), date.getMonth() , date.getDate());
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
      
    }

    if(periode == PredefinedPeriod.LASTYEAR) {
      var periodeStart = new Date(date.getFullYear() -1 , 0 , 1);
      var periodeEnd = new Date(date.getFullYear(), 0, 0);
      this.defaultSearchPeriode = { start: periodeStart, end: periodeEnd };
    }
    start = this.defaultSearchPeriode["start"].toISOString().split('T')[0];
    end = (!this.defaultSearchPeriode["end"]) ? this.defaultSearchPeriode["start"].toISOString().split('T')[0] : this.defaultSearchPeriode["end"].toISOString().split('T')[0]
    this.searchDateRange = start + "," + end;
    return this.defaultSearchPeriode;
    
  }
}
