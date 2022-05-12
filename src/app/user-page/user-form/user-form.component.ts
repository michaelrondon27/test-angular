import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user!: User;

  @Output() userChanged = new EventEmitter<User>();

  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      'id': new FormControl(this.user?.id),
      'name': new FormControl(this.user?.name, [Validators.required])
    });

    this.form.valueChanges.subscribe( (value) => {
      this.userChanged.emit(value);
    });
  }
}
