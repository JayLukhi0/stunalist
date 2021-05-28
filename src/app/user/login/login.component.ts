import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StunalistService } from 'src/app/stunalist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private _stunalistService:StunalistService,private _router:Router) {
    if (_stunalistService.isLoggedIn()) {
      _router.navigate(['/home'])
    }
   }

  ngOnInit(): void {
    this.login = new FormGroup({
      email:new FormControl('',Validators.required),
      pswd:new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    this._stunalistService.login(this.login.value);
  }

}
