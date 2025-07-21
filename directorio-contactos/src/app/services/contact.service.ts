import { HttpClient, HttpClientModule,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContactService {
  private apiUrl = 'http://localhost/backend/contact.php';

  constructor(private http: HttpClient) { }

  getAll(): Observable<{success: boolean, contacts: Contact[]}> {
    return this.http.get<{success: boolean, contacts: Contact[]}>(this.apiUrl);
  }

  getById(id: number): Observable<Contact> | undefined {
    return this.http.get<Contact>(`${this.apiUrl}?id=${id}`);
  }

  createContact(contact: Contact): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(`${this.apiUrl}?id=${contact.id}`, contact);
  }

  deletById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}


