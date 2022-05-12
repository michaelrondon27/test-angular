import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-array',
  templateUrl: './users-array.component.html',
  styleUrls: ['./users-array.component.css']
})
export class UsersArrayComponent implements OnInit {
  users = [
    { id: '1', firstName: 'Vanesa', lastName: 'Villena', age: 13 },
    { id: '2', firstName: 'Gaspar', lastName: 'Caro', age: 19 },
    { id: '3', firstName: 'Ignacio', lastName: 'Pérez', age: 18 },
    { id: '4', firstName: 'Laura', lastName: 'García', age: 15 },
    { id: '5', firstName: 'Ramiro', lastName: 'Valle', age: 28 },
  ];

  constructor() { }

  ngOnInit(): void {
    let usersFiltered = this.users.filter( user => user.age > 15 ).map( user => {
      return {
        id: user.id,
        fullName: `${ user.firstName } ${ user.lastName }`,
        age: user.age
      };
    });

    console.log(usersFiltered);
  }
}
