import {StunalistService} from './stunalist.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class StunalistInterceptor implements HttpInterceptor{

    constructor(private _stunalistService:StunalistService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authToken = this._stunalistService.getAccessToken();
        req = req.clone({
            setHeaders:{
                Authorization:'Bearer ' + authToken
            }
        });
        return next.handle(req).pipe(
            map((event:HttpEvent<any>) => {
                if(event instanceof HttpResponse){
                    console.log("event----->>>",event.body.err_msg);
                }
                return event;
            })
        );
    }

}