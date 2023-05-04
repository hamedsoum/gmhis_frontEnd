import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticeService } from 'src/app/_services/artice.service';
import { ArticleGroupService } from 'src/app/_services/article-group.service';
import { ArticleLocationService } from 'src/app/_services/article-location.service';
import { ArticleSupplierService } from 'src/app/_services/article-supplier.service';
import { DcuService } from 'src/app/_services/dcu.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

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
    articleId: number;
  
    /**
     * parent component input
     */
    @Input()
    title: string;
  
    /**
     * child component output
     */
    @Output()
    objectEmitter: EventEmitter <any> = new EventEmitter();
  
    /**
     * the component model
     */
    article: object;

     /**
     * the component model
     */
     articleGroup : object;
      
     articleSupplier : object;
     
     articleLocations : object;

     conditonUnits : object;


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
      private alertService : AlertService,
      private articleService:ArticeService,
      private articleGroupService : ArticleGroupService,
      private articleSupplierService :ArticleSupplierService,
      private articleLocationService : ArticleLocationService,
      private dcuService : DcuService
      
    ) { }

    ngOnInit(): void {
      this.initForm();
      if (this.articleId) this.initUpdateAction();
      this.getArticleGroup();
      this.getArticleSuppplier();
      this.getArticleLocation(),
      this.getDcu()
    }
  
    /**
     *  init form 
     */
    initForm() {
      this.form = new FormGroup({
        id: new FormControl(0),
        reference: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        active: new FormControl('Y', Validators.required),
        alertQuantity: new FormControl(''),
        articleGroup: new FormControl(''),
        articleLocation: new FormControl(''),
        buyingPrice: new FormControl(''),
        condQty: new FormControl(''),
        conditioningUnit: new FormControl(''),
        ppv: new FormControl(''),
        quantityInStock: new FormControl(''),
        sellingPrice: new FormControl(''),
        supplier: new FormControl(''),
        valQty: new FormControl(''),
        dcns: new FormControl([]),
        defaultDosage: new FormControl(null),
        generic: new FormControl(null),
        laboratory: new FormControl(null),
        location: new FormControl(''),
        pharmaceuticClass: new FormControl(null),
        pharmacologicalForm: new FormControl(null),
        princeps: new FormControl(null),
        therapeuticClass: new FormControl(null),
        type: new FormControl('A'),
      })
    }
  
    /**
     * init the form value when updating
     */
    initUpdateAction() {
        this.articleService.findById(this.articleId).subscribe(
          res => {
            if (res) {
              this.article= res;
              this.form.patchValue(this.article)
            } else {
              this.errorAction("Modification impossible car l'article n'existe pas", '/article-group/list');
            }
          },
          error => {
            this.errorAction("Erreur lors de la modification", '/article/list');
          })
    }
  
    /**
      * fonction called at the form submission action whenever to add or update the object
      */
    save() {
      // reset alerts on submit
      this.alertService.clear();
  
      //validate form '
      this.invalidFormControls = invalidformControls(this.form);
      this.article = this.form.value;
    if (this.form.valid) {
        this.objectEmitter.emit({ article: this.article, action: this.formAction})
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
  
   

    /*
      get all article group name and id on select  
    */

      getArticleGroup(){
        this.articleGroupService.getIdAndName().subscribe(res =>{
          this.articleGroup = res;
        })
      }

     /*
      get all article supplier name and id  
    */
      getArticleSuppplier(){
        this.articleSupplierService.getIdAndName().subscribe(res =>{
          this.articleSupplier = res;
        })
      }
    
    /*
      get all article location name and id  
    */
      getArticleLocation(){
        this.articleLocationService.getIdAndName().subscribe(res =>{
          this.articleLocations = res;
        })
      }

     /*
      get all article location name and id  
    */
      getDcu(){
        this.dcuService.getIdAndName().subscribe(res =>{
          this.conditonUnits = res;
        })
      }

       /**
     * action to Do when  ckick on cancel button
     */
    cancelAction() {
      this.errorAction('Action annulée', 'article/list');
    }
}
