import {Component, HostListener, inject, Inject, OnInit} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {AppComponent} from "../../app.component";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SearchBoxComponent} from "../../component/search-box/search-box.component";
import {CommonService} from "../../service/common/common.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
    imports: [
        NgIf,
        NgClass,
        RouterLink,
        RouterLinkActive,
        SearchBoxComponent,
        NgOptimizedImage
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  private commonService: CommonService = inject(CommonService);

  private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);



  ngOnInit() {

    this.breakpointObserver.observe([
      "(max-width: 991px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isMobileView = true;
        this.isSidebarOpen = false;

      }

      else {
        this.isMobileView = false;
        this.isSidebarOpen = true;

      }
    });


    this.commonService.sidebarToggleClickEvent
      .subscribe(() => {

        this.toggleSidebar()
      });



  }

  isMobileView = false;

  isSidebarOpen = true;

  isGardenSubmenuOpen = true;

  isHouseholdSubmenuOpen = true;




  toggleSidebar() {

    if(this.isMobileView) {

      this.isSidebarOpen = !this.isSidebarOpen;

    }

  }

  toggleGardenSubmenu() {
    this.isGardenSubmenuOpen = !this.isGardenSubmenuOpen;
  }

  toggleHouseholdSubmenu() {
    this.isHouseholdSubmenuOpen = !this.isHouseholdSubmenuOpen;
  }


  constructor(
    // private breakpointObserver: BreakpointObserver,
  ) {

  /*  this.breakpointObserver.observe([
      "(max-width: 991px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isSidebarOpen = false;
      }

      else {
        this.isSidebarOpen = true;
      }
    });*/
  }






}
