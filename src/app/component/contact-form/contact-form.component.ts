import {Component, Injectable} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from "@angular/forms";
import {MailFormService} from "../../service/mail-form.service";
import {NgxMaskDirective} from 'ngx-mask';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective

  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})




@Injectable({
  providedIn: 'root'
})
export class ContactFormComponent {


  // localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/mail/api.php

   contactForm!: FormGroup;



   http!: HttpClient;




    constructor(private formBuilder: FormBuilder,  private mailFormService: MailFormService) {




      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        taxId: ['', [Validators.required, Validators.minLength(6)]],
          message: ['', [Validators.required, Validators.minLength(6)]]

      });
    }


    onSubmit() {

   /* if (this.contactForm.valid) {

      console.log(this.contactForm.value);
      this.http.post(this.formUrl,this.contactForm.value).subscribe((res) => {
                console.log(res);
              });
      }*/


      if (this.contactForm.valid) {
        this.mailFormService.sendData(this.contactForm.value).subscribe(
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
