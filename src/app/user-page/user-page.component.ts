import { Component, OnInit } from '@angular/core';

import { User } from '../models/users.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  users: User[] = [
    { id: '1', name: 'Vanesa' },
    { id: '2', name: 'Gaspar' },
    { id: '3', name: 'Ignacio' },
    { id: '4', name: 'Laura' },
    { id: '5', name: 'Ramiro' }
  ];

  changedUser( userChanged: User ): void {
    const index = this.users.findIndex( (user: User) => user.id === userChanged.id );

    this.users[index] = userChanged;
  }
}
