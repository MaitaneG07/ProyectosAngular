import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from "../../components/side-menu/side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "../../components/side-menu/side-menu-options/side-menu-options.component";
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-contact-menu',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './contact-menu.component.html',
})
export class ContactMenuComponent { }
