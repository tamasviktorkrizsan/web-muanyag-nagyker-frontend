import { Routes } from '@angular/router';

import {WelcomeComponent } from './content/welcome/welcome.component';
import {ServicesComponent} from "./content/services/services.component";
import {ContactComponent} from "./content/contact/contact.component";
import {SearchComponent} from "./content/search/search.component";
import {PrivacyPolicyComponent} from "./content/privacy-policy/privacy-policy.component";


export const routes: Routes = [

  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'search/:id', component: SearchComponent}

];
