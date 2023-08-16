import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {  NbSidebarService } from '@nebular/theme';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HeaderAuthorityEnum } from 'src/app/_enum/header-autority';
import { User } from 'src/app/_models/user.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Sharedatafromheadertosidebar2Service } from 'src/app/_services/sharedatafromheadertosidebar2.service';
import { UserService } from 'src/app/_services/user.service';
import { ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { userRoles } from 'src/app/shared/constant';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  @ViewChild('content', { static: false }) private content;

  private subs = new SubSink();
  public user: User;

  showsideBar: boolean;

  searching = false;

  public voucherNumberFound = false;

  objetToshared : any;
x  
  actions = [
    {id : "sale", value :"Ventes"},
    {id : "transfert", value :"Transferts"},
    {id : "cashEntry", value :"Recouvrement"},
    {id : "expense", value :"Dépenses"},
    {id : "asset", value :"Avoirs"},
    {id : "stockEntry", value :"Entrées en stock"},
    {id : "stockOut", value :"Sorties de stock"},
    {id : "invoice", value :"Factures clients"},

  ]

  searchForm: FormGroup;
  action: string;
  
  tsContent : string;

  searchText: string;

  deliveryModalRef : NgbModalRef;

  showModal = false;

  userRole = userRoles;

  constructor(private router: Router,
    private readonly sidebarService: NbSidebarService,
    private authService: AuthenticationService,
    private shareDataFromHeaderToSidebar2: Sharedatafromheadertosidebar2Service,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private userService: UserService,
    ) {
      config.backdrop = 'static';
      config.keyboard = false;}

  ngOnInit(): void {
    this.user = this.authService.getUserFromLocalStorage();                
    this.shareDataFromHeaderToSidebar2.currentSource.subscribe(data => this.showsideBar = data)
    this.searchForm = new FormGroup({ 
      searchText : new FormControl(""),
      action : new FormControl("sale")});
  }

   ngOnDestroy() {
    this.subs.unsubscribe();
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, 'left');

  }

  toggleCompact() {
    this.sidebarService.toggle(false, 'right');
  }
  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
  showRightSideBarF() {
    this.shareDataFromHeaderToSidebar2.changeData(!this.showsideBar);
  }

  public get canAccessOrderSearchBox() {
    return this.userService.checkAuthority(HeaderAuthorityEnum.PURCHASE_ORDER_SEARCH_BOX);
  }

  public get canAccessNotification() {
    return this.userService.checkAuthority(HeaderAuthorityEnum.NOTIFICATION);
  }

  public get canAccessSetting() {
    return this.userService.checkAuthority(HeaderAuthorityEnum.SETTINGS);
  }



  

closeModal(){
this.deliveryModalRef.close();
this.deliveryModalRef = null
}

updateDeliveryInvoice(){
// this.deliveryModalRef.close();
this.modalService.dismissAll()
this.deliveryModalRef = null
}

showModalForm(){
  this.showModal = !this.showModal;
}



}
