import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOption } from '../../../interfaces/menu-options.interface';

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  @Input() menuOptions: MenuOption[] = [];
}
