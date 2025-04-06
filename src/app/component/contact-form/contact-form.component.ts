import {Component, Injectable} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from "@angular/forms";
import {NgxMaskDirective} from 'ngx-mask';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MailFormService} from "../../service/mail-form/mail-form.service";

// TODO: add recaptcha when this app runs from a webhost.

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

   contactForm: FormGroup;
   http!: HttpClient;

    constructor(private formBuilder: FormBuilder,
                private mailFormService: MailFormService,
                private router: Router
    )
    {

      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        taxId: ['', [Validators.required, Validators.minLength(11)]],
        message: ['', [Validators.required, Validators.minLength(6)]],
        userConsent: [false, Validators.requiredTrue]

      });
    }


    onSubmit() {
      if (this.contactForm.valid) {
        this.mailFormService.sendData(this.contactForm.value).subscribe(
          (response) => {
            console.log('POST response:', response);

            alert("Az üzenetet sikeresen elküldtük! Hamarosan felvesszük a kapcsolatot önnel");

            this.router.navigate(['/welcome'])

          },
          (error) => {
            console.error('POST error:', error);

            alert("Az üzenetet nem sikerült elküldeni. Kérjük probálja meg később!");

          }
        );
      }

      else {
        console.error("Kérjük hogy ellenörizze az űrlapon megadott adatok helyességét");
      }
    }

}
