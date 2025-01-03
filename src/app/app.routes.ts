import { Routes } from '@angular/router';

import {WelcomeComponent } from './content/welcome/welcome.component';
import {ServicesComponent} from "./content/services/services.component";
import {ContactComponent} from "./content/contact/contact.component";
import {SearchComponent} from "./content/search/search.component";


export const routes: Routes = [


  {path: 'welcome', component: WelcomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'search', component: SearchComponent},

  // product links

  {path: 'search/:id', component: SearchComponent}



];
