import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { LoginComponent } from './home/login.component';
import { DashboardComponent } from './component/dashboard.component';

import { UserModule } from './user/user.module';
import { ToastrService } from './services/toastr.service';

import { AppComponent } from './app.component';
import {MovieComponent }  from './movie.component';

import { DashboardMoviePipe } from './pipe/dashboard-movie.pipe';

@NgModule({
  declarations: [
    AppComponent ,
    LoginComponent,
    MovieComponent,
    DashboardComponent,
    DashboardMoviePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
   //   { path: 'dashboard', component: DahsBoardComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
  ])
    
    
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
