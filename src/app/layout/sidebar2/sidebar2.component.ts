import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { RoleAuthorityEnum } from 'src/app/_enum/role-authority';
import { SecondSideBarAuthority } from 'src/app/_enum/second-sidebar-authority';
import { UserAuthority } from 'src/app/_enum/userAuthority.enum';
import { UserService } from 'src/app/_services/user.service';

import { SubSink } from 'subsink';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.scss'],
})
export class Sidebar2Component implements OnInit, OnDestroy {
  private subs = new SubSink();

  items2: NbMenuItem[] = [
    {
      title: 'ACTES',
      icon: 'folder-outline',
      hidden: !this.canAccessActs(),
      children: [
        {
          title: 'Liste des actes',
          link: '/act/list',
          icon: 'minus-outline',
        },
        {
          title: 'Spécialités des actes',
          link: '/act/category',
          icon: 'minus-outline',
        },
        {
          title: 'familles des actes',
          link: '/act/family',
          icon: 'minus-outline',
        },
        {
          title: 'codes des actes',
          link: '/act/code',
          icon: 'minus-outline',
        },
      ],
    },
    {
      title: 'ANTECEDENT',
      icon: 'folder-outline',
      hidden: !this.canAccessAntecedent(),
      children: [
        {
          title: 'Liste des antecedents',
          link: '/antecedent/list',
          icon: 'minus-outline',
        },
        {
          title: 'familles des antecedens',
          link: '/antecedent/family',
          icon: 'minus-outline',
        },
      ],
    },
    {
      title: 'ASSURANCES',
      icon: 'folder-outline',
      hidden: !this.canAccessInssurance(),
      children: [
        {
          title: 'Assurances/Mutuelles',
          link: '/insurance/list',
          icon: 'minus-outline',
        },
        {
          // title: 'établissements garant',
          title: 'Coutiers',
          link: '/insurance/subscriber-list',
          icon: 'minus-outline',
        },
      ],
    },
    {
      title: 'CAISSES',
      icon: 'folder-outline',
      hidden: !this.canAccessCashiers(),
      children: [
        {
          title: 'Liste des caisses',
          link: '/cash-register/list',
          icon: 'minus-outline',
        },
        {
          title: 'Gestion des caisses',
          link: '/cr-activity/list',
          icon: 'minus-outline',
        },
        {
          title : 'Mouvement des caisses',
          link : '/cash-register-movement/list',
          icon : 'minus-outline'
        }
      ],
    },
    {
      title: 'CONSTANTES MEDICALES',
      icon: 'folder-outline',
      hidden: !this.canAccessConstants(),
      children: [
        {
          title: 'Groupe de constante',
          link: '/constant/domain',
          icon: 'minus-outline',
        },
        {
          title: 'Constante type',
          link: '/constant/type',
          icon: 'minus-outline',
        },
      ],
    },
    {
      title: 'NOS CONVENTIONS',
      icon: 'folder-outline',
      hidden: !this.canAccessConvention(),
      children: [
        {
          title: 'Liste convention',
          link: '/convention/list',
          icon: 'minus-outline',
        },
      ],
    },
    {
      title: 'DOCUMENTS TYPES',
      icon: 'folder-outline',
      hidden: !this.canAccessDocumentType(),
      children: [
        {
          title: 'Bilan type',
          link: '/document/check-up',
          icon: 'minus-outline',
        },
        {
          title: 'Certificat type',
          link: '/document/certificat',
          icon: 'minus-outline',
        },
        {
          title: 'courier type',
          link: '/document/mail',
          icon: 'minus-outline',
        },
        {
          title: 'Ordannance type',
          link: '/document/prescription',
          icon: 'minus-outline',
        },
        {
          title: 'Cro type',
          link: '/document/cro',
          icon: 'minus-outline',
        },
        {
          title: 'Famille de cro ',
          link: '/document/cro-family',
          icon: 'minus-outline',
        },
      ],
    },
    {
      title: 'NOS CENTRES DE SANTÉ',
      icon: 'folder-outline',
      hidden: !this.canAccessFacility(),
      children: [
        {
          title: 'Liste des centres de santé',
          link: '/facility/list',
          icon: 'minus-outline',
        }
      ],
    },
    {
      title: 'PATHOLOGIES',
      icon: 'folder-outline',
      hidden: !this.canAccessPathology(),
      children: [
        {
          title: 'Liste des pathologies',
          link: '/pathology/list',
          icon: 'minus-outline',
        }  
      ],
    },
    {
      title: 'PHARMACIE',
      icon: 'folder-outline',
      hidden: !this.canAccessPharmacy(),
      children: [
        {
          title: 'Medicaments',
          link: '/drug/list',
          icon: 'minus-outline',
        },
        {
          title: 'DCI',
          link: '/drug/dci',
          icon: 'minus-outline',
        },
        {
          title: 'Classe therapeutique',
          link: '/drug/therapeuticClass',
          icon: 'minus-outline',
        },
        {
          title: 'Forme pharmacologique',
          link: '/drug/pharmacologicalForm',
          icon: 'minus-outline',
        },
        {
          title: 'Laboratoire',
          // link: '/constant/type',
          icon: 'minus-outline',
        },
        {
          title: 'Unite de conditionnement',
          // link: '/constant/type',
          icon: 'minus-outline',
        }
      ],
    },
    {
      title: 'PRACTICIENS',
      icon: 'folder-outline',
      hidden: !this.canAccessPracticians(),
      children: [
        {
          title: 'Liste des practiciens',
          link: '/practician/list',
          icon: 'minus-outline',
        }    
      ],
    },
    {
      title: "SALLES D'ATTENTE",
      icon: 'folder-outline',
      hidden: !this.canAccessWaitingRoom(),
      children: [
        {
          title: 'Salles d\'attente',
          link: '/waiting-room/list',
          icon: 'minus-outline',
        }
      ],
    },
    {
      title: "STOCK",
      icon: 'folder-outline',
      hidden: !this.canAccessStock(),
      children: [
        {
          title: 'Gestion de de kits',
          icon: 'minus-outline',
        },
        {
          title: 'Articles',
          icon: 'minus-outline',
        },
        {
          title: 'Détails des entrées en stocks',
          icon: 'minus-outline',
        },
        {
          title: 'Emplacement d\'article',
          icon: 'minus-outline',
        },
        {
          title: 'Famille d\'article',
          icon: 'minus-outline',
        },
        {
          title: 'Fournisseur',
          icon: 'minus-outline',
        }  
      ],
    },
    {
      title: "SPECIALITES",
      icon: 'folder-outline',
      hidden: !this.canAccessSpeciality(),
      children: [
        {
          title: 'Liste des spécialités',
          link: '/speciality/list',
          icon: 'minus-outline',
        }     
      ],
    },
    {
      title: "SUBDIVISION TERRITORIALE",
      icon: 'folder-outline',
      hidden: !this.canAccessTeritorialSubdivision(),
      children: [
        {
          title: 'Pays',
          icon: 'minus-outline',
        },
        {
          title: 'Villes',
          icon: 'minus-outline',
        },
        {
          title: 'Regions',
          icon: 'minus-outline',
        },
        {
          title: 'Districts',
          icon: 'minus-outline',
        },
        {
          title: 'Localités',
          icon: 'minus-outline',
        }
      ],
    },
    {
      title: "SYMPTÔMES",
      icon: 'folder-outline',
      hidden: !this.canAccesSymptom(),
      children: [
        {
          title: 'Liste des symptômes',
          icon: 'minus-outline',
        }       
      ],
    },
    {
      title: "TYPES DE PAYEMENT",
      icon: 'folder-outline',
      hidden: !this.canAccesPaymentType(),
      children: [
        {
          title: 'Liste des types de payements',
          icon: 'minus-outline',
        }
      ],
    },
    {
      title: 'GESTION DES UTILISATEURS',
      icon: 'people-outline',
      hidden: !this.canAccessUserManagenent(),
      children: [
        {
          title: 'Utilisateur',
          link: '/user/list',
          icon: 'minus-outline',
          hidden: !this.canAccesUser(),
        },
        {
          title: 'Rôle utilisateur',
          link: '/role/list',
          icon: 'minus-outline',
          hidden: !this.canAccesUserRole(),
          
        },
      ],
    },
    {
      title: 'TRACE DES EVENEMENTS',
      icon: 'question-mark-circle-outline',
      link: '/log/list',
      hidden: !this.canAccessEventLog(),
    },
    {
      title: "PARAMETRE D'APPLICATION",
      icon: 'settings-outline',
      hidden: !this.canAccessApllicationSetting(),
    },
  ];
  constructor(private userService: UserService) {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {}


  private canAccessActs(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_ACTS) };

  private canAccessInssurance(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_INSURANCE) };

  private canAccessAntecedent(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_ANTECEDENT) };

  private canAccessCashiers(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_CASHIERS) };

  private canAccessConstants(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_CONSTANTS) };

  private canAccessConvention(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_CONVENTION) };

  private canAccessDocumentType(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_DOCUMENT_TYPE) };

  private canAccessFacility(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_FACILITY) };

  private canAccessPathology(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_PATHOLOGY) };

  private canAccessPharmacy(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_PHARMACY) };

  private canAccessPracticians(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_PRACTICIAN) };

  private canAccessStock(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_STOCK) };

  private canAccessWaitingRoom(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_WAITING_ROOM) };

  private canAccessSpeciality(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_SPECIALITY) };

  private canAccessTeritorialSubdivision(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_TERRITORIAL_SUBDIVISION) };

  private canAccesSymptom(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_SYMPTOMS) };

  private canAccesPaymentType(): boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_PAYMENT_TYPE) };

  private canAccessUserManagenent():boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_USER_MANAGEMENT) };

  private canAccesUser():boolean { return this.userService.checkAuthority(UserAuthority.USER_LIST) };

  private canAccesUserRole():boolean { return this.userService.checkAuthority(RoleAuthorityEnum.ROLE_LIST) };

  private canAccessEventLog():boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_EVENT_LOG) };

  private canAccessApllicationSetting():boolean { return this.userService.checkAuthority(SecondSideBarAuthority.ACCESS_APPLICATION_SETTINGS) };

}
