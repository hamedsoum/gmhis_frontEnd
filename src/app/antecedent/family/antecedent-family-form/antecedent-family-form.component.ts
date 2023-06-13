import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChildren,
} from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { fromEvent, merge, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GlobalGenerateValidator } from 'src/app/shared/validators/global-generic.validator';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IAntecedent } from '../../antecedent.model';
import { AntecedentFamilleService } from '../antecedent-famille.service';

@Component({
  selector: 'app-antecedent-family-form',
  templateUrl: './antecedent-family-form.component.html',
  styleUrls: ['./antecedent-family-form.component.scss'],
})
export class AntecedentFamilyFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  antecedentFamille: IAntecedent;

  @Input()
  details: boolean;

  @Output('addAntecedentFamille') addAntecedentFamille: EventEmitter<any> =
    new EventEmitter();
  @Output('updateAntecedentFamille')
  updateAntecedentFamille: EventEmitter<any> = new EventEmitter();

  /**
   * form
   */
  public antecedentFamilleForm: FormGroup;

  /**
   * the form valid state
   */
  public invalidFom = false;

  /**
   * check if the form is submitted
   */
  public formSubmitted = false;

  /**
   * define isActive options
   */
  states = [
    { id: true, value: 'Actif' },
    { id: false, value: 'En sommeil' },
  ];

  /**
   * handle the spinner
   */
  showloading: boolean = false;

  actives = [
    { id: true, value: 'Actif' },
    { id: false, value: 'Inactif' },
  ];

  private validatiomMessage: { [key: string]: { [key: string]: string } } = {
    hotelName: {
      required: "Le nom de l'hotel est obligatoire",
      minlength: "Le nom de l'hotel doit comporter au moins 4 caractères",
    },
    price: {
      required: "Le prix de l'hotel est obligatoire",
      pattern: "Le prix de l'hotel doit etre un nombre",
    },
    rating: {
      range: 'Donnez une note comprise entre 1 et 5',
    },
  };

  private globalGenericValidator!: GlobalGenerateValidator;

  @ViewChildren(FormControlName, { read: ElementRef })
  inputElements!: ElementRef[];

  public errorMessage!: string;

  public formsErrors: { [key: string]: string } = {};

  private isFormSubmitted: boolean = false;

  constructor(
    private antecedentFamilleService: AntecedentFamilleService,
    private notificationService: NotificationService
  ) {}

  // Unsubscribe when the component dies
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.globalGenericValidator = new GlobalGenerateValidator(
      this.validatiomMessage
    );
    this.initForm();
    if (this.antecedentFamille) {
      this.antecedentFamilleForm.patchValue(this.antecedentFamille);
    }
  }

  ngAfterViewInit(): void {
    const formControlBlurs: Observable<unknown>[] = this.inputElements.map(
      (FormControlElementRef: ElementRef) =>
        fromEvent(FormControlElementRef.nativeElement, 'blur')
    );

    merge(this.antecedentFamilleForm.valueChanges, ...formControlBlurs)
      .pipe(
        debounceTime(500)
      )
      .subscribe(() => {
        this.formsErrors = this.globalGenericValidator.createErrorMessage(
          this.antecedentFamilleForm,
          this.formSubmitted
        );
      });
  }

  initForm() {
    this.antecedentFamilleForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      active: new FormControl(true),
      description: new FormControl(null),
    });
  }
  get name() {
    return this.antecedentFamilleForm.get('name');
  }
  get description() {
    return this.antecedentFamilleForm.get('description');
  }

  save() {
    this.invalidFom = !this.antecedentFamilleForm.valid;
    this.formSubmitted = true;
    if (this.antecedentFamilleForm.valid) {
      this.showloading = true;
      this.antecedentFamille = this.antecedentFamilleForm.value;
      if (this.antecedentFamille.id) {
        this.subs.add(
          this.antecedentFamilleService
            .updateAntecedentFamille(this.antecedentFamille)
            .subscribe(
              (response: IAntecedent) => {
                this.showloading = false;
                this.updateAntecedentFamille.emit();
              },
              (errorResponse: HttpErrorResponse) => {
                this.showloading = false;
                this.notificationService.notify(
                  NotificationType.ERROR,
                  errorResponse.error.message
                );
              }
            )
        );
      } else {
        this.subs.add(
          this.antecedentFamilleService
            .createAntecedentFamille(this.antecedentFamille)
            .subscribe(
              (response: IAntecedent) => {
                this.showloading = false;
                this.addAntecedentFamille.emit();
              },
              (errorResponse: HttpErrorResponse) => {
                this.showloading = false;
                this.notificationService.notify(
                  NotificationType.ERROR,
                  errorResponse.error.message
                );
              }
            )
        );
      }
    }
  }
}
