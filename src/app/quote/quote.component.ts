import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StunalistService } from '../stunalist.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({opacity:0,height:0}),
        animate(1000)
      ])
    ])
  ]
})
export class QuoteComponent implements OnInit {


  quotes;
  addquote=false;
  addQuote:FormGroup;

  constructor(private _stunalistService:StunalistService) { 
      this.addQuote = new FormGroup({
        uname : new FormControl('',Validators.required),
        quote : new FormControl('',Validators.required),
        author : new FormControl('',Validators.required)
      })
  }

  ngOnInit(): void {
    this._stunalistService.getQuote().subscribe(res=>{
      this.quotes=res;
    })
  }

  showForm(){
    this.addquote = !this.addquote;
    console.log("Add quote");
  }

  addQuotes(){
    this._stunalistService.postQuote(this.addQuote.value).subscribe(res=>{
      // console.log(res);
      this.addQuote.reset();
      this.addquote = false;
      this.ngOnInit()
    });
  }

}
