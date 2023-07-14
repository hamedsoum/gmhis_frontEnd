import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { constant } from '../patient-constant/models/patient-constant';

@Directive({
  selector: '[controlConstant]'
})
export class ControlConstantDirective implements OnInit{
  private readonly POUL_MIN = 60;
  private readonly POUL_MAXI = 80;
  private readonly POUL_LIMIT_MIN_DANGER = 50; 
  private readonly POUL_LINIT_MAX_DANGER = 90;

  private readonly BLOOD_PRESSURE_NORMAL = '140/90'; 
  private readonly BLOOD_PRESSURE_LIMIT_MIN_DANGER = '100/50'; 
  private readonly BLOOD_PRESSURE_LIMIT_MAX_DANGER = '140/90'; 

  private readonly TEMPERATURE_NORMAL = 37 ;
  private readonly TEMPERATURE_LIMIT_MIN_DANGER = 36.5;
  private readonly TEMPERATURE_LIMIT_MAX_DANGER = 37.5;

  @Input() constantName: string;
  @Input() constanValue: number;

  constructor(private el: ElementRef) {
 }

  ngOnInit(): void {
    if (this.constantName.toLocaleLowerCase() == constant.PULSE) this.pulseControl(this.constanValue);
    else if(this.constantName.toLocaleLowerCase() == constant.TEMPERATURE) this.templeratureControl(this.constanValue);
  }

  pulseControl(value: number): void {
    if (value < this.POUL_LIMIT_MIN_DANGER || value > this.POUL_LINIT_MAX_DANGER) {
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.color = 'white';
    } 
  }

  templeratureControl(value: number): void {
    if (value < this.TEMPERATURE_LIMIT_MIN_DANGER || value > this.TEMPERATURE_LIMIT_MAX_DANGER) {
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.color = 'white';
    } 
  }

}
