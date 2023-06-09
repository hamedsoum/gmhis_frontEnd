import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  @Input() data : any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    if (this.data != null && this.data != undefined) {

    }
  }

}
