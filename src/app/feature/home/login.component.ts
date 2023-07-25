import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  router: any;
  data: any;
  map: any;
  loginForm: any[] = [];
  form!: any;
  invalid: any;
  hide = false;
  constructor() {}
  ngOnInit(): void {
    const localdata = localStorage.getItem('SingnIn');
    if (localdata != null) {
      this.loginForm = JSON.parse(localdata);
    }
    this.form = {
      email: '',
      password: '',
    };
  }

  formSubmit() {
    this.loginForm.push(this.form);
    console.log(this.form);
    let data = localStorage.getItem('users');

    console.log(data);
  }
  onlogin() {
    debugger;
    this.loginForm.push(this.form);
    console.log(this.form);
    let data = localStorage.getItem('users');
    if (data) {
      const allUser = JSON.parse(data);

      const userExit = allUser.find(
        (x: any) =>
          x.email == this.form.email && x.password == this.form.password
      );

      if (
        userExit &&
        userExit.email == this.form.email &&
        userExit.password == this.form.password
      ) {
        this.router.navigate(['/home']);
      } else {
        alert('Login failed, display error to user');
      }
    }
  }
}
