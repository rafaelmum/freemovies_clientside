import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MovieModule} from './module/movie.module'
import {HttpClientModule} from '@angular/common/http';     

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { LoginComponent } from './component/login.component';
import { DashboardComponent } from './component/dashboard.component';
import { MovieComponent }  from './component/movie.component';

import { UserModule } from './module/user.module';
import { ToastrService } from './service/toastr.service';
import { AuthGuard } from './service/auth-guard.service';

import { AppComponent } from './app.component';


import { DashboardMoviePipe } from './pipe/dashboard-movie.pipe';
import { DashboardMovieDirective } from './directive/dashboard-movie.directive';

@NgModule({
  declarations: [
    AppComponent ,
    LoginComponent,
    DashboardComponent,
    DashboardMoviePipe,
    DashboardMovieDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,

    
    HttpClientModule,
    MovieModule ,  

    ReactiveFormsModule,
    HttpModule,
    UserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard]},
      { path: 'movies', component: MovieComponent, canActivate: [ AuthGuard]},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
  ])
    
    

  ],

  providers: [
    ToastrService,
    AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }