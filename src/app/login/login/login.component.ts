import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: '';
  password:'';

  sw = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void{
    console.log('username: ', this.username);
    console.log('password: ', this.password);
  }

  onLogin2(form): void {
    console.log('Form: ', form.value);
    this.router.navigate(['/pages']);
  }

}