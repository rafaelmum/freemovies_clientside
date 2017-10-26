import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule } from '@angular/http';

import {DashboardComponent}  from '../component/dashboard.component';
import {BuyPointsComponent} from '../component/buy-points.component';
import {UserProfileService} from '../service/user-profile.service';
import {HttpClientModule} from '@angular/common/http';

import { DashboardMoviePipe } from '../pipe/dashboard-movie.pipe';
import { DashboardMovieDirective } from '../directive/dashboard-movie.directive';

@NgModule({
  declarations: [  
    DashboardComponent,
    BuyPointsComponent,
    DashboardMoviePipe,
    DashboardMovieDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  exports:[DashboardComponent],
  providers: [UserProfileService]
})
export class DashboardModule { }
