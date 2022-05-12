import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() users!: User[];

  @Output() usersChanged = new EventEmitter<User[]>();

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    let groups: any = [];

    for ( let i = 0; i < this.users.length; i++ ) {
      groups[`form${ i }`] = [this.users[i].name, [Validators.required]];
    }

    this.form = this.formBuilder.group(groups);
  }

  nameChanged( index: number ): void {
    this.users[index].name = this.form.get(`form${ index }`)?.value;

    this.usersChanged.emit(this.users);
  }
}
