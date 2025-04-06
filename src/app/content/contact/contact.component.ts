import {Component} from '@angular/core';
import {ContactFormComponent} from "../../component/contact-form/contact-form.component";
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactFormComponent,
    NgOptimizedImage
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {

}
