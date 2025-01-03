import { Component, OnInit } from '@angular/core';
import {NgFor, NgForOf, NgIf} from '@angular/common';
import {NgxMaskDirective} from "ngx-mask";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SearchCatalogItemService} from "../../service/search-catalog-item.service";
import {CatalogItemComponent} from "../../component/catalog-item/catalog-item.component";
import { ActivatedRoute } from '@angular/router';
import {empty} from "rxjs";
import {SearchFormComponent} from "../../component/search-form/search-form.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgxMaskDirective,
    ReactiveFormsModule,
    CatalogItemComponent,
    NgForOf,
    NgIf,
    SearchFormComponent
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
