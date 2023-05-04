import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCroFamilyService } from 'src/app/_services/type-cro-family.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { TypeFlags } from 'typescript';

@Component({
  selector: 'app-update-type-cro-family',
  templateUrl: './update-type-cro-family.component.html',
  styleUrls: ['./update-type-cro-family.component.css']
})
export class UpdateTypeCroFamilyComponent implements OnInit {

  /**
  *  id 
  */
  croFamilyId: number;

  /**
   * title to display
   */
  title = "Modification d'une Famille de CRO";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private typeCroFamilyService: TypeCroFamilyService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.croFamilyId = params.id;
    })
  }

  /**
   * update existing object
   * @param data object
   */
  save(data) {

    let typeCroFamily = data.typeCroFamily;
    let action = data.action;
    this.typeCroFamilyService.update(typeCroFamily).subscribe(res => {
      this.router.navigate(['/cro-family/list']);
      this.alertService.success('Famille modifiée avec succès');
    });

  }
}
