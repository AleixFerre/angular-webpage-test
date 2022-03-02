import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  private contactsSub!: Subscription;
  isLoading = false;

  constructor(public contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = [
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
      {
        id: '1',
        name: 'John Doe',
        email: 'test@test.com',
        phone: '123456789',
        secphone: '123456789',
        notes: 'test',
      },
    ];
  }

  ngOnDestroy(): void {
    this.contactsSub.unsubscribe();
  }

  onDelete(id: string) {
    this.contactsService.deleteContact(id);
  }
}
