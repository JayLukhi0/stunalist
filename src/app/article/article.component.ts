import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StunalistService } from '../stunalist.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({opacity:0,height:0}),
        animate(1000)
      ])
    ])
  ]
})
export class ArticleComponent implements OnInit {

  articles;
  addarticle=false;
  addArticle:FormGroup;
  uName;

  constructor(private _stunalistService:StunalistService) {
    this.uName = _stunalistService.getUname();
    this.addArticle = new FormGroup({
      uname:new FormControl(this.uName,Validators.required),
      title:new FormControl('',Validators.required),
      desc:new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
    this._stunalistService.getArticle().subscribe(res=>{
      this.articles=res;
    })
  }

  showForm(){
    this.addarticle=!this.addarticle;
  }

  addArticles(){
    this._stunalistService.postArticle(this.addArticle.value).subscribe(res=>{
      // console.log(res);
      this.addArticle.reset();
      this.addarticle=false;
      this.ngOnInit();
    })

  }

}
