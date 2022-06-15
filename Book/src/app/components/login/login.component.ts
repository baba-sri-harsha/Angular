import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  retURl: string = '';
  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let url = map.get('returnUrl');
      if (url) this.retURl = url;
    });
  }

  onSubmit = (userForm: NgForm) => {
    console.log(userForm.value);
    let user = userForm.value;
    this._loginService.loginUser(user.username, user.password).subscribe({
      next: (data: boolean) => {
        if (!data) this._router.navigate(['home']);
        // if this is false he is an invalid user so take him to home page
        else if (!data || this.retURl == null) this._router.navigate(['home']);
        //if return url id not null take him to the retun url route
        else this._router.navigate([this.retURl]);
      },
    });
  };
}
