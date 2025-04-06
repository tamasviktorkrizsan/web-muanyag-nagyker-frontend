import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {NgxMaskDirective} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {CatalogItemComponent} from "../../component/catalog-item/catalog-item.component";
import { ActivatedRoute } from '@angular/router';
import {empty} from "rxjs";
import {SearchResultsComponent} from "../../component/search-results/search-results.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgxMaskDirective,
    ReactiveFormsModule,
    CatalogItemComponent,
    NgForOf,
    NgIf,
    SearchResultsComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  id: string | null = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });


  }

}
