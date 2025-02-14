import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SearchBoxComponent} from "../../component/search-box/search-box.component";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        SearchBoxComponent
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {






}
