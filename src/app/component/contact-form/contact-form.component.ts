import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {



  inputText: string = '';

  onSubmit() {
    alert(`You entered: ${this.inputText}`);
  }





}
