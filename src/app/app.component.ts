import { Component } from '@angular/core';
import { StunalistService } from './stunalist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isMenuCollapsed = true;
  title = 'stunalist';

  constructor(public _stunalistService:StunalistService){}

  logOut(){
    this._stunalistService.logout();
  }
}
