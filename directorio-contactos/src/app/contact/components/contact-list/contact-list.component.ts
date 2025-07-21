import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../../interfaces/contact.interface';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contactos: Contact[] = [];
  cargando = true;
  error: string | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando = true;
    this.error = null;

    this.contactService.getAll().subscribe({
      next: (response) => {
        if (response.success) {
          this.contactos = response.contacts;
        } else {
          this.error = 'Error al cargar los contactos';
        }
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error de conexión con el servidor';
        this.cargando = false;
        console.error('Error:', err);
      }
    });
  }
}
