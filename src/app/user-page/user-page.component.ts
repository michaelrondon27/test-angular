import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../models/users.model';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  @ViewChild('validateForm') private userFormComponent!: UserFormComponent;

  users: User[] = [
    { id: '1', name: 'Vanesa' },
    { id: '2', name: 'Gaspar' },
    { id: '3', name: 'Ignacio' },
    { id: '4', name: 'Laura' },
    { id: '5', name: 'Ramiro' }
  ];

  changedUsers( usersChanged: User[] ): void {
    this.users = usersChanged;
  }

  validateform(): void {
    if ( this.userFormComponent.form.status === 'VALID' ) {
      console.log('El formulario es válido');
    } else {
      console.log('El formulario es inválido');
    }
  }
}
