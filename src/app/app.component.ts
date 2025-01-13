import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
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

export class AppComponent {


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








