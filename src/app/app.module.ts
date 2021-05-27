import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { QuoteComponent } from './quote/quote.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import { StunalistGuard } from './stunalist.guard';
import { StunalistService } from './stunalist.service';
import { StunalistInterceptor } from './stunalistconfig.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    QuoteComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbCollapseModule,
    
  ],
  providers: [StunalistGuard,StunalistService,{
    provide:HTTP_INTERCEPTORS,
    useClass:StunalistInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
