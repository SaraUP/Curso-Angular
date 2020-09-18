import { Component, Input,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {

  @Input() report: boolean;

  vaccinated = 0;
  notVaccinated = 0;
  storeSub: Subscription;

  constructor(private authService: AuthService, private store: Store<any>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select(s => s.admin).subscribe(res => {
      this.vaccinated = 0;
      this.notVaccinated = 0;
      this.vaccinated = res.vaccinated;
      this.notVaccinated = res.notVaccinated;
    });
  }

  public onLogout(): void{
    this.authService.logout();
  }

}