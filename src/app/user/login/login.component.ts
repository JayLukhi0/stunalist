import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StunalistService } from 'src/app/stunalist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private _stunalistService:StunalistService) { }

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
