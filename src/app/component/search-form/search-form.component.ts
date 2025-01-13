import {Component, Input, OnInit} from '@angular/core';
import {NgFor, NgForOf, NgIf} from '@angular/common';
import {NgxMaskDirective} from "ngx-mask";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SearchCatalogItemService} from "../../service/search-catalog-item.service";
import {CatalogItemComponent} from "../catalog-item/catalog-item.component";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    NgxMaskDirective,
    ReactiveFormsModule,
    CatalogItemComponent,
    NgForOf,
    NgIf

  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent implements OnInit {


  // localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/mail/api.php

  searchForm!: FormGroup;


  /* id: string | null = null;

   constructor(private route: ActivatedRoute) {}

   ;*/




  http!: HttpClient;

  itemList: any;

  item: any;

  i: any;


  private _url_search: any;

  @Input()

  set url_search(value: any) {
    this._url_search = value;
  }

  get url_search(): any {
    return this._url_search;
  }




// constructor(private formBuilder: FormBuilder,  private searchCatalogItemService: SearchCatalogItemService)

  constructor(private formBuilder: FormBuilder,
              private searchCatalogItemService: SearchCatalogItemService,
              private route: ActivatedRoute) {




    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: [''] // Form control for the ID
    });

    // Get the ID from the URL and patch the form
    this.route.paramMap.subscribe((params) => {
      const search = params.get('id');
      if (search) {
        this.searchForm.patchValue({ search }); // Set the ID value
        this.onSubmit(); // Submit the form on page load
      }
    });






  }




  onSubmit() {

    /* if (this.contactForm.valid) {

       console.log(this.contactForm.value);
       this.http.post(this.formUrl,this.contactForm.value).subscribe((res) => {
                 console.log(res);
               });
       }*/


    if (this.searchForm.valid) {
      this.searchCatalogItemService.sendData(this.searchForm.value).subscribe(
        (response) => {

          this.itemList = response

          console.log('POST response:', this.itemList);


        },
        (error) => {
          console.error('POST error:', error);
        }
      );


    }

    else {
      console.error('Form is invalid');
    }
  }

}




/* for(const object of response){


   <app-catalog-item [category]=object.category></app-catalog-item>
*/
















