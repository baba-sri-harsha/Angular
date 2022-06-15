import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css'],
})
export class TempFormComponent implements OnInit {
  constructor() {}

  @ViewChild('userForm') userForm!: NgForm;

  ngOnInit(): void {}
  cities: string[] = ['hyderabad', 'banglore', 'chennai', 'thiruvanathapuram'];

  onSubmit = (userForm: NgForm) => {
    console.log(userForm);
    console.log(userForm.value);
  };
  resetForm = (userForm: NgForm) => {
    userForm.reset();
  };

  resetUserForm = () => {
    this.userForm.reset();
  };
}
