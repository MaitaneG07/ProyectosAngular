import { Component } from "@angular/core";
import { MenuOption } from "../../interfaces/menu-options.interface";
import { SideMenuHeaderComponent } from "./side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "./side-menu-options/side-menu-options.component";

@Component({
  selector: 'side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  menuOptions: MenuOption[] = [
    {
      id: 1,
      label: 'Crear',
      subLabel: 'Crea un nuevo contacto',
      route: '/components/contact-crear', // Ruta diferente
    },
    {
      id: 2,
      label: 'Ver',
      subLabel: 'Visualiza el contacto',
      route: '/components/contact-details',
    },
    {
      id: 3,
      label: 'Editar',
      subLabel: 'Edita el contacto',
      route: '/components/contact-editar', // Ruta diferente
    },
    {
      id: 4,
      label: 'Borrar',
      subLabel: 'Elimina el contacto',
      route: '/components/contact-list',
    },
  ];
}
