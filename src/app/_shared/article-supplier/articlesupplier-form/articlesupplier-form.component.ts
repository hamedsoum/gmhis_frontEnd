import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleSupplier } from 'src/app/_models/articleSupplier.model';
import { ArticleSupplierService } from 'src/app/_services/article-supplier.service';
import { CountryService } from 'src/app/_services/country.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
@Component({
  selector: 'app-articlesupplier-form',
  templateUrl: './articlesupplier-form.component.html',
  styleUrls: ['./articlesupplier-form.component.css']
})
export class ArticlesupplierFormComponent implements OnInit {


 
  /**
   *   form Group
   */
   form: FormGroup;

   /**
   * form submission action, it will get the value of the action to do
   */
   formAction = '';
 
   /**
    * invalid from controls
    */
   invalidFormControls: any;
 
 
   /**
    * parent component input
    */
   @Input()
   articleSupplierId: number;
 
   /**
    * parent component input
    */
   @Input()
   title: string;
 
   /**
    * child component output
    */
   @Output()
   objectEmitter: EventEmitter<any> = new EventEmitter();
 
   /**
    * the component model
    */
   articleSupplier: ArticleSupplier

   /**
    * define  countries options
    */

   countries : Object;
 
    /**
    * define  states options
    */
   actives = [
     {id: "Y", value: "Actif"},
     {id: "N", value: "Inactif"},
   ]
 
   /**
    * action to do for display error msg and redirect
    * @param msg 
    * @param redirectTo 
    */
   errorAction = function (msg: string, redirectTo: string) {
     this.router.navigate([redirectTo]);
     this.alertService.error(msg);
   };
   constructor(
    private router: Router,
    private alertService : AlertService,
    private articleSupplierService: ArticleSupplierService,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.countryService.getIdAndName().subscribe(res=>{
      this.countries = res;
      
    })
    this.initForm();
    if (this.articleSupplierId) this.initUpdateAction();
    
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      postalCode: new FormControl(''),
      address: new FormControl(''),
      contact: new FormControl(''),
      email: new FormControl('',Validators.email),
      country: new FormControl(110),
      active: new FormControl('Y', Validators.required),
      
    });
  }
  /**
   * init the form value when updating
   */
  initUpdateAction() {
    this.form.get("country").reset();
      this.articleSupplierService.findById(this.articleSupplierId).subscribe(
        articleSupplier => {
          if (articleSupplier) {
            this.articleSupplier = articleSupplier;
            this.form.patchValue(this.articleSupplier);
          } else {
            this.errorAction("Modification impossible car le fournisseur n'existe pas", '/article-supplier/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/article-supplier/list');
        })
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {// reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.articleSupplier = this.form.value;
  
    if (this.form.valid) {
      this.objectEmitter.emit({ articleSupplier: this.articleSupplier, action: this.formAction })
      if (this.formAction == "save_and_new") this.initForm();
    } else {
      this.alertService.error('Formulaire non valid');
    }
  }

  /**
   * get the form submission action
   * @param action : string
   */
  actionToDo(action) {
    this.formAction = action;
  }

  /**
   * action to Do when  ckick on cancel button
   */
  cancelAction() {
    this.errorAction('Action annulée', '/article-supplier/list');
  }


}
