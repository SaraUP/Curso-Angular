import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public ngOnInit(): void{
  }

  public onLogout(): void{
    this.authService.logout();
  }

}