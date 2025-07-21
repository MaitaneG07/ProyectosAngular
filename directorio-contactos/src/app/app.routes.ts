import { Routes } from '@angular/router';
import { ContactMenuComponent } from './layout/contact-menu/contact-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactMenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'contact/contact-list',
        pathMatch: 'full' // Añadido pathMatch
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.routes')
          .then(m => m.contactRoutes)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'contact/contact-list',
  },
];
