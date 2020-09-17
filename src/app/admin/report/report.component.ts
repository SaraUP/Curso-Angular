import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public onLogout(): void{
    this.authService.logout();
  }

}