import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArticleComponent } from './article/article.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuoteComponent } from './quote/quote.component';
import { StunalistGuard } from './stunalist.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,canActivate:[StunalistGuard]},
  {path:'article',component:ArticleComponent,canActivate:[StunalistGuard]},
  {path:'quote',component:QuoteComponent,canActivate:[StunalistGuard]},
  // {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent,canActivate:[StunalistGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
