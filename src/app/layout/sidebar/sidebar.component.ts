import {Component, HostListener} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {







}
