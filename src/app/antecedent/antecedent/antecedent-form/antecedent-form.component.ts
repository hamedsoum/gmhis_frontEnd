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
import { AntecedentService } from '../antecedent.service';

@Component({
  selector: 'app-antecedent-form',
  templateUrl: './antecedent-form.component.html',
  styleUrls: ['./antecedent-form.component.scss'],
})
export class AntecedentFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  antecedent: IAntecedent;

  @Input()
  details: boolean;

  @Output('addAntecedent') addAntecedent: EventEmitter<any> =
    new EventEmitter();
  @Output('updateAntecedent') updateAntecedent: EventEmitter<any> =
    new EventEmitter();

  /**
   * form
   */
  public antecedentForm: FormGroup;

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
    private antecedentService: AntecedentService,
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
    if (this.antecedent) {
      this.antecedentForm.patchValue(this.antecedent);
    }
  }


  initForm() {
    this.antecedentForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      active: new FormControl(true),
      description: new FormControl(null),
    });
  }
  get name() {
    return this.antecedentForm.get('name');
  }
  get description() {
    return this.antecedentForm.get('description');
  }

  save() {
    this.invalidFom = !this.antecedentForm.valid;
    this.formSubmitted = true;
    if (this.antecedentForm.valid) {
      this.showloading = true;
      this.antecedent = this.antecedentForm.value;
      if (this.antecedent.id) {
        this.subs.add(
          this.antecedentService.updateAntecedent(this.antecedent).subscribe(
            (response: IAntecedent) => {
              this.showloading = false;
              this.updateAntecedent.emit();
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
          this.antecedentService.createAntecedent(this.antecedent).subscribe(
            (response: IAntecedent) => {
              this.showloading = false;
              this.addAntecedent.emit();
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
