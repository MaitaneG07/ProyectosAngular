import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

export const contactRoutes: Routes = [
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'contact-form',
    component: ContactFormComponent
  },
  {
    path: 'contact-form/:id', // Ruta para edición
    component: ContactFormComponent
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsComponent
  },
  {
    path: '',
    redirectTo: 'contact-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'contact-list'
  }
];
