import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NotifService } from 'src/app/_services/notif.service';
import { Sharedatafromheadertosidebar2Service } from 'src/app/_services/sharedatafromheadertosidebar2.service';

import { SubSink } from 'subsink';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit ,  OnDestroy{ private subs = new SubSink();
  showRightSideBar : boolean;
  transfertNotification : number = 0 ;

  
  constructor(private readonly sidebarService: NbSidebarService,
               private shareDataFromHeaderToSidebar2 : Sharedatafromheadertosidebar2Service,
               ) { }

   // Unsubscribe when the component dies
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.shareDataFromHeaderToSidebar2.currentSource.subscribe(data => this.showRightSideBar = data)
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  
}
