import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SearchBoxComponent} from "./component/search-box/search-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, SidebarComponent, NgOptimizedImage, ReactiveFormsModule, SearchBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

}
