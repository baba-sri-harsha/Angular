import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  user = '';
  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    lastName: new FormControl(),
    gender: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
    }),
  });

  onRegister = (form: FormGroup) => {
    console.log(form.value);
    this.user = form.value;
    console.log(this.user);
    console.log(form.controls);
  };

  get myform() {
    return this.userForm.controls;
  }

  constructor() {}

  ngOnInit(): void {}
}
