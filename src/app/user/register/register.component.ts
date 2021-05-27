import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StunalistService } from 'src/app/stunalist.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:FormGroup;
  constructor(private _stunalistService:StunalistService,private _router:Router) { }

  ngOnInit(): void {
    this.register = new FormGroup({
      uname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      pswd:new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    this._stunalistService.register(this.register.value).subscribe(res=>{
      console.log(res);
      this.register.reset();
      this._router.navigate(['login']);
    })
  }
}
