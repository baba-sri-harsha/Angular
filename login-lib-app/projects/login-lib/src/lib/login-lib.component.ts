import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login-lib',
  template: `
    <form #userForm="ngForm">
      Username:<input type="text" name="username" #username /> Password:<input
        type="password"
        name="password"
        #password
      />
      <input type="submit" (click)="submit(userForm)" />
    </form>
  `,
  styles: [],
})
export class LoginLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
