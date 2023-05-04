import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from "./_guard/authentication.guard";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './authentication/login/login.component';
import { LayoutComponent } from './base-template/layout/layout.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home-component`

  { path: 'login', component: LoginComponent },
  { path: 'user/password-changing/:id', component: ChangePasswordComponent, canActivate: [AuthenticationGuard] },

  {
    path: '', component: LayoutComponent, canActivate: [AuthenticationGuard],  children: [

      { path: 'home', component: HomeComponent },
      
      {
        path: 'act',
        loadChildren: () => import('./act/act.module').then(m => m.ActModule)
      },
      {
        path: 'admission',
        loadChildren: () => import('./admission/admission.module').then(m => m.AdmissionModule)
      },
      {
        path: 'antecedent',
        loadChildren: () => import('./antecedent/antecedent.module').then(m => m.AntecedentModule)
      },
      {
        path: 'article',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
      },
      {
        path: 'article-group',
        loadChildren: () => import('./article-group/article-group.module').then(m => m.ArticleGroupModule)
      },
      {
        path: 'article-location',
        loadChildren: () => import('./article-location/article-location.module').then(m => m.ArticleLocationModule)
      },
      {
        path: 'article-supplier',
        loadChildren: () => import('./article-supplier/article-supplier.module').then(m => m.ArticleSupplierModule)
      },
      {
        path: 'cash-register',
        loadChildren: () => import('./cash-register/cash-register.module').then(m => m.CashRegisterModule)
      },
      {
        path: 'cashier',
        loadChildren: () => import('./cashier/cashier.module').then(m => m.CashierModule)
      },
      {
        path: 'check-up',
        loadChildren: () => import('./check-up/check-up.module').then(m => m.CheckUpModule)
      },

      {
        path: 'convention',
        loadChildren: () => import('./convention/convention.module').then(m => m.ConventionModule)
      },
      {
        path: 'constant-domain',
        loadChildren: () => import('./constant-domain/constant-domain.module').then(m => m.ConstantDomainModule)
      },
      {
        path: 'constant-type',
        loadChildren: () => import('./constant-type/constant-type.module').then(m => m.ConstantTypeModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
      },
      {
        path: 'city',
        loadChildren: () => import('./city/city.module').then(m => m.CityModule)
      },
      {
        path: 'certificate-type',
        loadChildren: () => import('./type-certificate/type-certificate.module').then(m => m.TypeCertificateModule)
      },
      {
        path: 'cro-type',
        loadChildren: () => import('./type-cro/type-cro.module').then(m => m.TypeCroModule)
      },
      {
        path: 'cro-family',
        loadChildren: () => import('./type-cro-family/type-cro-family.module').then(m => m.TypeCroFamilyModule)
      },
      {
        path: 'district',
        loadChildren: () => import('./district/district.module').then(m => m.DistrictModule)
      },
      {
        path: 'facility',
        loadChildren: () => import('./facility/facility.module').then(m => m.FacilityModule)
      },
      {
        path: 'locality',
        loadChildren: () => import('./locality/locality.module').then(m => m.LocalityModule)
      },
      {
        path: 'laboratory',
        loadChildren: () => import('./laboratory/laboratory.module').then(m => m.LaboratoryModule)
      },
      {
        path: 'medical-folder',
        loadChildren: () => import('./medical-folder/medical-folder.module').then(m => m.MedicalFolderModule)
      },
      {
        path: 'mail-type',
        loadChildren: () => import('./type-mail/type-mail.module').then(m => m.TypeMailModule)
      },
      {
        path: 'insurance',
        loadChildren: () => import('./insurance/insurance.module').then(m => m.InsuranceModule)
      },
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: 'patient-constant',
        loadChildren: () => import('./patient-constant/patient-constant.module').then(m => m.PatientConstantModule)
      },
      {
        path: 'permission',
        loadChildren: () => import('./permission/permission.module').then(m => m.PermissionModule)
      },
      {
        path: 'pharmacy',
        loadChildren: () => import('./pharmacy/pharmacy.module').then(m => m.PharmacyModule)
      },
      {
        path: 'prescription-type',
        loadChildren: () => import('./type-prescription/type-prescription.module').then(m => m.TypePrescriptionModule)
      },
      {
        path: 'practician',
        loadChildren: () => import('./practician/practician.module').then(m => m.PracticianModule)
      },
      {
        path: 'pathology',
        loadChildren: () => import('./pathology/pathology.module').then(m => m.PathologyModule)
      },

      {
        path: 'payment-type',
        loadChildren: () => import('./payment-type/payment-type.module').then(m => m.PaymentTypeModule)
      },
      
      {
        path: 'role',
        loadChildren: () => import('./role/role.module').then(m => m.RoleModule)
      },
      {
        path: 'service',
        loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'symptom',
        loadChildren: () => import('./symptom/symptom.module').then(m => m.SymptomModule)
      },
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.RegionModule)
      },
      {
        path: 'speciality',
        loadChildren: () => import('./speciality/speciality.module').then(m => m.SpecialityModule)
      },
      {
        path: 'scheduler',
        loadChildren: () => import('./scheduler/scheduler.module').then(m => m.SchedulerModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'uom',
        loadChildren: () => import('./unit-of-measure/unit-of-measure.module').then(m => m.UnitOfMeasureModule)
      },
      {
        path: 'waiting-room',
        loadChildren: () => import('./waiting-room/waiting-room.module').then(m => m.WaitingRoomModule)
      },

      { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule { } 
