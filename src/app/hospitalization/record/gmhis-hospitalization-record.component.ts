import { Component, Input, OnInit } from '@angular/core';
import { GMHISHospitalizationPartial } from '../api/domain/gmhis-hospitalization';

@Component({selector: 'gmhis-hospitalization-record',templateUrl: './gmhis-hospitalization-record.component.html'})
export class GMHISHospitalizationRecordComponent implements OnInit {

  @Input() hospitalization: GMHISHospitalizationPartial;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hospitalization);
    
  }

}
