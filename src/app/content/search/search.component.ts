import { Component } from '@angular/core';
import {NgxMaskDirective} from "ngx-mask";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MailFormService} from "../../service/mail-form.service";
import {CatalogItemComponent} from "../../component/catalog-item/catalog-item.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgxMaskDirective,
    ReactiveFormsModule,
    CatalogItemComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  // localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/mail/api.php

  searchForm!: FormGroup;



  http!: HttpClient;




  constructor(private formBuilder: FormBuilder,  private mailFormService: MailFormService) {




    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(3)]
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
      this.mailFormService.sendData(this.searchForm.value).subscribe(
        (response) => {
          console.log('POST response:', response);
        },
        (error) => {
          console.error('POST error:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }













}
