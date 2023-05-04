import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-cash-operation',
  templateUrl: './add-cash-operation.component.html',
  styleUrls: ['./add-cash-operation.component.css']
})
export class AddCashOperationComponent implements OnInit {

  /**
   * the component name
   */
  component: string;

  /**
   * page title
   */
  title= 'Encaisser une facture';

  /**
   * the object id
   */
  invoiceId: number;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.component=this.activatedRoute.snapshot.component['name'];

    this.activatedRoute.params.subscribe(params => {

      this.invoiceId = Number(params.invoiceId);
      if (isNaN(this.invoiceId)) {
        this.router.navigate(['/admission/invoice/list']);
        this.alertService.error("Encaissement impossible car la facture n'existe pas")
      }

    })
  };

}
