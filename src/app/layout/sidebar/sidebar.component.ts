import {Component, HostListener} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {AppComponent} from "../../app.component";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SearchBoxComponent} from "../../component/search-box/search-box.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    RouterLinkActive,
    SearchBoxComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {




  isSidebarOpen = true;

  isGardenSubmenuOpen = true;

  isHouseholdSubmenuOpen = true;



  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  toggleGardenSubmenu() {
    this.isGardenSubmenuOpen = !this.isGardenSubmenuOpen;
  }

  toggleHouseholdSubmenu() {
    this.isHouseholdSubmenuOpen = !this.isHouseholdSubmenuOpen;
  }











  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        // hide stuff

        this.isSidebarOpen = false;

      } else {
        // show stuff

        this.isSidebarOpen = true;


      }
    });
  }






}
