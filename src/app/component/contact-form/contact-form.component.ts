import { Component } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from "@angular/forms";

import {NgxMaskDirective} from 'ngx-mask';


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






export class ContactFormComponent {


    contactForm!: FormGroup;


    constructor(private formBuilder: FormBuilder) {

      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        taxId: ['', [Validators.required, Validators.minLength(6)]],
          message: ['', [Validators.required, Validators.minLength(6)]]

      });
    }

    onSubmit() {
      if (this.contactForm.valid) {
        console.log(this.contactForm.value);
      }
    }













/*


  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    taxNumber: new FormControl(''),
    message: new FormControl('')

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

*/







  // inputText: string = '';

  /*onSubmit() {
    alert(`You entered: ${this.inputText}`);
  }*/

}
