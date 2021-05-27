import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from './article';
import {Quote} from './quote';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class StunalistService {

  constructor(private _http:HttpClient,private _router:Router) { }

  url="http://localhost:3000/api/";


  //For Users
  register(user:User):Observable<any>{
    return this._http.post<any>(this.url+"register",user);
  }

  login(user:User){
    return this._http.post<any>(this.url+"login",user)
    .subscribe((res:any)=>{
      if (res.msg!=="") {
        window.alert("User not found");
      } else {
        localStorage.setItem("access-token",res.token);
        localStorage.setItem("uname",res.user);
        this._router.navigate(['/home']);
      }
    });
  }

  // to check is user is logged in or not
  isLoggedIn():boolean{
    let authToken = localStorage.getItem("access-token");
    return (authToken) !== null ? true : false;
  }

  // logout process
  logout(){
    if(localStorage.removeItem("access-token")==null && localStorage.removeItem("uname")==null){
      this._router.navigate(['/login']);
    }
  }

   // get token  & username fom the localStorage
   getAccessToken(){
    return localStorage.getItem("access-token");
  }
   getUname(){
    return localStorage.getItem("uname");
  }
  
  //For Articles
  getArticle():Observable<any>{
    return this._http.get<any>(this.url + "showarticle");
  }
  
  postArticle(article:Article):Observable<any>{
    return this._http.post<any>(this.url + "addarticle",article);
  }

  //For Quotes
  getQuote():Observable<any>{
    return this._http.get<any>(this.url + "showquote");
  }

  postQuote(qoute:Quote):Observable<any>{
    return this._http.post<any>(this.url + "addquote",qoute);
  }

  //For Contact us
  sendMessage(msg){
    return msg;
  }
}
