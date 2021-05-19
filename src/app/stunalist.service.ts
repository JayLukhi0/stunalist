import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
import {Quote} from './quote';

@Injectable({
  providedIn: 'root'
})
export class StunalistService {

  constructor(private _http:HttpClient) { }

  url="http://localhost:3000/api/";

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
}
