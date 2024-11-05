import { Routes } from '@angular/router';

import {WelcomeComponent } from './content/welcome/welcome.component';
import {ServicesComponent} from "./content/services/services.component";
import {ContactComponent} from "./content/contact/contact.component";


export const routes: Routes = [

  {path: 'welcome', component: WelcomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent}

];
