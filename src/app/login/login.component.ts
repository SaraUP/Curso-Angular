import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: any): void{
    console.log('Form: ', form.value);

    this.authService.login(form.value).subscribe(
      res => {
        console.log('LOGIN RESPONSE: ', res);
      },
      err => {
        console.log('LOGIN ERROR: ');
      }
    );
  }

}