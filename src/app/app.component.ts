import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet, RouterLink, RouterLinkActive,} from '@angular/router';
// import * as $ from 'jquery';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {HttpClient} from "@angular/common/http";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, SidebarComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// https://stackoverflow.com/questions/45350716/detecting-real-time-window-size-changes-in-angular-4


export class AppComponent {

/*
  public windowWidth: any;

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
  }*/

  triggerStatus = false;


  triggerSidebar() {
    this.triggerStatus = true;


  }




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

/*


export class AppComponent implements OnInit {
  title = 'a-web-muanyag-nagyker-frontend';
@viewChild('sidebarCollapse', {static: true}) sidebarCollapse?: ElementRef;

constructor(private http: HttpClient) {
}
ngOnInit() {

  $(this.sidebarCollapse?.nativeElement).on('click', () => {
    alert('123');

  });

}
*/




/*

  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  });
*/








