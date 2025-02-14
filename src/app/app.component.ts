import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute,} from '@angular/router';
// import * as $ from 'jquery';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {HttpClient} from "@angular/common/http";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SearchCatalogItemService} from "./service/search-catalog-item.service";
import {SearchBoxComponent} from "./component/search-box/search-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, SidebarComponent, NgOptimizedImage, ReactiveFormsModule, SearchBoxComponent],
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








