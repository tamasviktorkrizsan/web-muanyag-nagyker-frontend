import { Component } from '@angular/core';
import {NgFor, NgForOf} from '@angular/common';
import {NgxMaskDirective} from "ngx-mask";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SearchCatalogItemService} from "../../service/search-catalog-item.service";
import {CatalogItemComponent} from "../../component/catalog-item/catalog-item.component";
import {empty} from "rxjs";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgxMaskDirective,
    ReactiveFormsModule,
    CatalogItemComponent,
    NgForOf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  // localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/mail/api.php

  searchForm!: FormGroup;



  http!: HttpClient;
  itemList: any;


  category: string = "cserép";

  name: string = "garda";

  type: string = "4l";

  color: string = "red";

  product_id: string = "01234";

  img: string = "mappa/cserep.jpg"

  item: any;




  constructor(private formBuilder: FormBuilder,  private searchCatalogItemService: SearchCatalogItemService) {




    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
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
