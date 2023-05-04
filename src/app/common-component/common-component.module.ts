import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorisationAlertComponent } from '../_shared/alert/autorisation-alert/autorisation-alert.component';

@NgModule({
  declarations: [ AutorisationAlertComponent],
  imports: [
    CommonModule
  ],
  exports : [AutorisationAlertComponent],
})
export class CommonComponentModule { }
